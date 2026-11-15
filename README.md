# Coconut Earth Foundation

React and TypeScript application built with Vite. The production build is a single,
self-contained HTML file written to `dist/index.html`.

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

`yarn build` type-checks the app and creates the single-file production build in `dist/`.
