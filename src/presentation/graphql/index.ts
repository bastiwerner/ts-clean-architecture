import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {
  GetLibraryTrackQuery,
  GetLibraryTracksQuery,
  LibraryTrackQueryResponse,
  handleLibraryTrackQuery,
} from "../../application/libraryTrack/queries";
import { PrismaClient } from "../../infrastructure/prisma/client";
import { libraryTrackSqliteRepository } from "../../infrastructure/prisma/libraryTrackSqliteRepository";
import {
  LibraryTrackError,
  LibraryTrackResult,
  LibraryTrackResults,
  LibraryTrackResponse,
  Resolvers,
  LibraryTracksResponse,
} from "./generated/resolvers-types";
import { readFileSync } from "fs";
import { LibraryTrack } from "../../domain/libraryTrack/libraryTrack";
import {
  CreateLibraryTrack,
  handleLibraryTrackCommand,
} from "../../application/libraryTrack/commands";

const typeDefs = readFileSync("src/presentation/graphql/schema.graphql", {
  encoding: "utf-8",
});
const prisma = new PrismaClient();
const repository = libraryTrackSqliteRepository(prisma);

/**
 * Presentation layer implementation for the GraphQL webserver.
 * Entrypoint for our application. Handles the dependcies and
 * transforms incoming request (GraphQL technologie) into our application
 * and domain specific objects (commands, queries). That seperates the
 * technologie from out busines logic.
 */
const resolvers: Resolvers = {
  Query: {
    libraryTrack: async (_, { trackId }): Promise<LibraryTrackResponse> => {
      const query: GetLibraryTrackQuery = {
        type: "GetLibraryTrackQuery",
        id: trackId,
      };

      return handleLibraryTrackQuery(query, repository)
        .then((track): LibraryTrackResult => {
          return {
            __typename: "LibraryTrackResult",
            id: (track as LibraryTrack).id,
            name: (track as LibraryTrack).filename,
          };
        })
        .catch((error): LibraryTrackError => {
          return {
            __typename: "LibraryTrackError",
            message: error,
          };
        });
    },
    libraryTracks: async (
      _,
      { trackIds, name },
    ): Promise<LibraryTracksResponse> => {
      const query: GetLibraryTracksQuery = {
        type: "GetLibraryTracksQuery",
        ids: trackIds ? (trackIds as number[]) : undefined,
        name: name || undefined,
      };

      return handleLibraryTrackQuery(query, repository)
        .then((tracks: LibraryTrackQueryResponse): LibraryTrackResults => {
          return {
            __typename: "LibraryTrackResults",
            tracks: (tracks as LibraryTrack[]).map((track) => {
              return {
                __typename: "LibraryTrackResult",
                id: track.id,
                name: track.filename,
              };
            }),
          };
        })
        .catch((error): LibraryTrackError => {
          return {
            __typename: "LibraryTrackError",
            message: error,
          };
        });
    },
  },
  Mutation: {
    createLibraryTrack: async (_, { name }): Promise<LibraryTrackResponse> => {
      const command: CreateLibraryTrack = {
        type: "CreateLibraryTrack",
        name,
      };

      return handleLibraryTrackCommand(command, repository)
        .then((track): LibraryTrackResult => {
          return {
            __typename: "LibraryTrackResult",
            id: track.id,
            name: track.filename,
          };
        })
        .catch((error): LibraryTrackError => {
          return {
            __typename: "LibraryTrackError",
            message: `Failed to create library track: ${error}`,
          };
        });
    },
  },
};

const server = new ApolloServer<{}>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, { listen: { port: 4001 } }).then(({ url }) =>
  console.log(`🚀 GraphQL Server ready at ${url}`),
);
