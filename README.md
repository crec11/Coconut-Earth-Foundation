# Coconut Earth Foundation

React and TypeScript application built with Vite. Vite uses `src/index.html` as its entry point.
The production build is a single, self-contained `index.html` written to the project root.

## Getting started

Requires Node.js 22.12 or newer and Yarn.

```sh
yarn install
yarn dev
```

## Checks and build

```sh
yarn test
yarn lint
yarn format:check
yarn typecheck
yarn build
```

`yarn build` type-checks the app and writes the single-file production build to the project root.
