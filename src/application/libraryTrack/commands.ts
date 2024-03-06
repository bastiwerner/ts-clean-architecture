import { LibraryTrack } from "../../domain/libraryTrack/libraryTrack";
import { LibraryTrackRepository } from "../../domain/libraryTrack/libraryTrackRepository";

export type CreateLibraryTrack = {
  type: "CreateLibraryTrack";
  name: string;
};

export type DeleteLibraryTrack = {
  type: "DeleteLibraryTrack";
  id: number;
};

export type LibraryTrackCommand = CreateLibraryTrack | DeleteLibraryTrack;

/**
 * CQRS library track create command handler (use case).
 * Dependencies are injected which makes the code testable and flexible.
 */
export async function createLibraryTrackHandler(
  command: CreateLibraryTrack,
  repository: LibraryTrackRepository,
): Promise<LibraryTrack> {
  return repository.create(command.name);
}

/**
 * CQRS library track delete command handler (use case).
 * Dependencies are injected which makes the code testable and flexible.
 */
export async function deleteLibraryTrackHandler(
  command: DeleteLibraryTrack,
  repository: LibraryTrackRepository,
): Promise<LibraryTrack> {
  return repository.delete(command.id);
}

export function handleLibraryTrackCommand(
  command: LibraryTrackCommand,
  repository: LibraryTrackRepository,
) {
  switch (command.type) {
    case "CreateLibraryTrack":
      return createLibraryTrackHandler(command, repository);
    case "DeleteLibraryTrack":
      return deleteLibraryTrackHandler(command, repository);
  }
}
