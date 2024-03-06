# Typescript clean architecture

The projects tries to give an example how a clean architecture could look like in typescript. It is using the onion architecture approach with 4 layers domain, application, infrastructure and presentation. According to a clean architecture philosophy the layers should give you a hint how dependencies can be managed for an application.

The example application uses two web technologies REST and GraphQL to create Library tracks which are defined in the domain logic. The application layer uses the pattern CQRS (Command and Query Responsibility Seperation) to handle library track creation/deletion (commands) and retireval (queries). The REST and GraphQL servers are implemented in the presentation layer and the database (sqlite and ORM system prisma) is implemented in the infrastructure layer.

| Layer          | Description          | Objects                              |
| -------------- | -------------------- | ------------------------------------ |
| Domain         | Business logic layer | LibraryTrack, LibraryTrackRepository |
| Application    | Use cases            | Command and Query handlers           |
| Infrastructure | Outer world layer    | LibraryTrackSqliteRepository         |
| Presentation   | Outer world layer    | REST and GraphQL Servers             |

## Getting started

```bash
# Install dependencies
yarn
# Run the prisma (sqlite) migration and create database under src/infrastructure/prisma
yarn run prisma migrate dev --schema ./src/infrastructure/prisma/schema.prisma
# (Optional) Generate graphql schema only when schema changed
graphql-codegen --config src/presentation/graphql/codegen.ts
```

## Running the application

To run the different web technologies use the following scripts.

```bash
# Start rest server (http://localhost:4000)
yarn start-rest
# Start graphql server (http://localhost:4001/graphql)
yarn start-graphql
```

The grapqhl apollo server comes with a nice web UI to visualize the GraphQL schema. You just have to open the [server grapqhl endpoint](http://localhost:4001/graphql).
