import hyper from "hyper-express";
import {
  CreateLibraryTrack,
  DeleteLibraryTrack,
  handleLibraryTrackCommand,
} from "../../application/libraryTrack/commands";
import { libraryTrackSqliteRepository } from "../../infrastructure/prisma/libraryTrackSqliteRepository";
import { PrismaClient } from "../../infrastructure/prisma/client";
import {
  GetLibraryTrackQuery,
  GetLibraryTracksQuery,
  handleLibraryTrackQuery,
} from "../../application/libraryTrack/queries";

const prisma = new PrismaClient();
const webserver = new hyper.Server();
const repository = libraryTrackSqliteRepository(prisma);

/**
 * Presentation layer implementation for the REST webserver.
 * Entrypoint for our application. Handles the dependcies and
 * transforms incoming request (web technologie) into our application
 * and domain specific objects (commands, queries). That seperates the
 * technologie from out busines logic.
 */
webserver.post("/libraryTracks", async (request, response) => {
  const command: CreateLibraryTrack = {
    type: "CreateLibraryTrack",
    name: request.query_parameters.name,
  };
  return handleLibraryTrackCommand(command, repository)
    .then(() => response.status(200).send())
    .catch((error) => response.status(400).send(error));
});

webserver.delete("/libraryTracks/:id", async (request, response) => {
  const command: DeleteLibraryTrack = {
    type: "DeleteLibraryTrack",
    id: Number(request.path_parameters.id),
  };
  return handleLibraryTrackCommand(command, repository)
    .then(() => response.status(200).send())
    .catch((error) => response.status(400).send(error));
});

webserver.get("/libraryTracks", async (request, response) => {
  const query: GetLibraryTracksQuery = {
    type: "GetLibraryTracksQuery",
    ids: request.query_parameters.ids?.split(",").map(Number),
    name: request.query_parameters.name,
  };
  return handleLibraryTrackQuery(query, repository)
    .then((track) =>
      response.status(200).type("json").send(JSON.stringify(track)),
    )
    .catch((error) => response.status(400).send(error));
});

webserver.get("/libraryTracks/:id", async (request, response) => {
  const query: GetLibraryTrackQuery = {
    type: "GetLibraryTrackQuery",
    id: Number(request.path_parameters.id),
  };
  return handleLibraryTrackQuery(query, repository)
    .then((track) =>
      response.status(200).type("json").send(JSON.stringify(track)),
    )
    .catch((error) => response.status(400).send(error));
});

// Activate webserver by calling .listen(port, callback);
webserver
  .listen(4000)
  .then(async (socket) => {
    console.log(`🚀 REST Server ready at ${webserver.port}`);
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(`Failed to start webserver: ${error}`);
    await prisma.$disconnect();
    process.exit(1);
  });
