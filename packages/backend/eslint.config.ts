import type { Linter } from "eslint";
import eslintConfigESLint from "eslint-config-eslint";
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default [
  ...eslintConfigESLint,
  {
    plugins: {
      '@stylistic/ts': stylisticTs
    }
  }
] satisfies Linter.Config[];
