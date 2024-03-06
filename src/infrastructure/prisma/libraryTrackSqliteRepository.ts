import { LibraryTrackRepository } from "../../domain/libraryTrack/libraryTrackRepository";
import { LibraryTrack } from "../../domain/libraryTrack/libraryTrack";
import { PrismaClient } from "./client";

/**
 * Implementation of the LibraryTrackRepository which is defined in our domain layer.
 * The dependencies are clearly seperated so that the domain and application does not
 * know about the details how library tracks are stored or retrieved from a database.
 */
export function libraryTrackSqliteRepository(
  prisma: PrismaClient,
): LibraryTrackRepository {
  return {
    findById: (id: number): Promise<LibraryTrack> =>
      prisma.libraryTrackEntity.findFirstOrThrow({
        where: {
          id,
        },
      }),
    getAll: (ids?: number[], name?: string): Promise<LibraryTrack[]> =>
      prisma.libraryTrackEntity.findMany({
        where: {
          id: { in: ids },
          filename: { contains: name },
        },
      }),
    create: (name: string): Promise<LibraryTrack> =>
      prisma.libraryTrackEntity.create({
        data: {
          filename: name,
        },
      }),
    delete: (id: number): Promise<LibraryTrack> =>
      prisma.libraryTrackEntity.delete({ where: { id } }),
  };
}
