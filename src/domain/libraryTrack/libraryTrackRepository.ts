import { LibraryTrack } from "../../domain/libraryTrack/libraryTrack";

/**
 * Interface Definition of how library tracks can be created, deleted and retieved
 * by the outer layer implementation (infrastructure).
 */
export interface LibraryTrackRepository {
  getAll: (ids?: number[], name?: string) => Promise<LibraryTrack[]>;
  findById: (id: number) => Promise<LibraryTrack>;
  create: (name: string) => Promise<LibraryTrack>;
  delete: (id: number) => Promise<LibraryTrack>;
}
