function getTsConfigTemplate() {
  return `{
  "compilerOptions": {
    "module": "esNext",
    // Target latest version of ECMAScript.
    "target": "esnext",
    // Search under node_modules for non-relative imports.
    "moduleResolution": "node",
    // Process & infer types from .js files.
    "allowJs": true,
    // Don't emit; allow Babel to transform files.
    "noEmit": true,
    // Enable strictest settings like strictNullChecks & noImplicitAny.
    "strict": true,
    // Disallow features that require cross-file information for emit.
    "isolatedModules": true,
    // Import non-ES modules as default imports.
    "esModuleInterop": true,
    // Avoid passing optional types if this return null
    "strictNullChecks": true,
    "experimentalDecorators": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitAny": false,
    "jsx": "react",
    "baseUrl": "./",
    "paths": {
      "*": [
        "*"
      ]
    },
    "plugins": [
      {
        "name": "typescript-styled-plugin"
      }
    ]
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
`;
}

module.exports = getTsConfigTemplate;
