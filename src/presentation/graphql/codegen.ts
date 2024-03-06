
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/presentation/graphql/schema.graphql",
  generates: {
    "src/presentation/graphql/generated/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
