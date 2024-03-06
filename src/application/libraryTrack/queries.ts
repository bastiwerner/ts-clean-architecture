import { LibraryTrack } from "../../domain/libraryTrack/libraryTrack";
import { LibraryTrackRepository } from "../../domain/libraryTrack/libraryTrackRepository";

export type GetLibraryTrackQuery = {
  type: "GetLibraryTrackQuery";
  id: number;
};

export type GetLibraryTracksQuery = {
  type: "GetLibraryTracksQuery";
  ids?: number[];
  name?: string;
};

export type LibraryTrackQueryResponse = LibraryTrack | LibraryTrack[];
export type LibraryTrackQuery = GetLibraryTrackQuery | GetLibraryTracksQuery;

/**
 * CQRS library track read query handler (use case).
 * Dependencies are injected which makes the code testable and flexible.
 */
const getLibraryTrackQueryHandler = (
  query: GetLibraryTrackQuery,
  repository: LibraryTrackRepository,
) => repository.findById(query.id);

/**
 * CQRS library tracks read query handler (use case).
 * Dependencies are injected which makes the code testable and flexible.
 */
const getLibraryTracksQueryHandler = (
  query: GetLibraryTracksQuery,
  repository: LibraryTrackRepository,
) => repository.getAll(query.ids, query.name);

export function handleLibraryTrackQuery(
  query: LibraryTrackQuery,
  repository: LibraryTrackRepository,
): Promise<LibraryTrackQueryResponse> {
  switch (query.type) {
    case "GetLibraryTrackQuery": {
      return getLibraryTrackQueryHandler(query, repository);
    }
    case "GetLibraryTracksQuery": {
      return getLibraryTracksQueryHandler(query, repository);
    }
  }
}
