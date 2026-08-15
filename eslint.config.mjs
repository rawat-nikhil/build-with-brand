import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

/**
 * Atomic design layering: imports may only point "downward".
 * atoms <- molecules <- organisms <- templates <- app
 */
function forbidLayers(layer, forbidden) {
  return {
    files: [`src/components/${layer}/**/*.{ts,tsx}`],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: forbidden.flatMap((f) => [
                `@/components/${f}`,
                `@/components/${f}/**`,
              ]),
              message: `An ${layer} module may not import from ${forbidden.join(", ")}. Lift the shared piece into a lower layer instead.`,
            },
          ],
        },
      ],
    },
  };
}

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  forbidLayers("atoms", ["molecules", "organisms", "templates"]),
  forbidLayers("molecules", ["organisms", "templates"]),
  forbidLayers("organisms", ["templates"]),
  {
    // The data layers stay presentation-agnostic so components can depend on them.
    files: ["src/content/**/*.ts", "src/types/**/*.ts", "src/lib/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/components", "@/components/**"],
              message:
                "content, types and lib must not depend on components. Move shared types into src/types instead.",
            },
          ],
        },
      ],
    },
  },
  // Must stay last: disables rules that would fight Prettier.
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
