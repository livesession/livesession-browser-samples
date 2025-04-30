# LiveSession Browser SDK Samples

This repository contains examples of how to integrate [@livesession/browser](https://www.npmjs.com/package/@livesession/browser) with various popular web frameworks.

## Available Examples

- [Angular](./angular) - Angular integration

- [Astro](./astro) - Astro integration

- [Next.js](./next) - Next.js integration

- [Nuxt](./nuxt) - Nuxt.js integration

- [React](./react) - Basic React integration

- [React Router](./react-router) - React Router integration

- [SvelteKit](./sveltekit) - SvelteKit integration

- [Vue](./vue) - Vue.js integration

## Getting Started

Each framework example is contained in its own directory with specific instructions. Choose the framework you're interested in and follow the README in that directory.

## General LiveSession Browser SDK setup

1. Install the package:
```bash
npm install @livesession/browser
```

2. Initialize LiveSession:
```ts
import ls from "@livesession/browser"

ls.init("YOUR_TRACK_ID")
```

3. Start recording:
```ts
ls.newPageView()
```

For more details, see individual framework examples for specific implementation details.

## Requirements

- Node.js 16.x or later
- A LiveSession account and project key

## License

MIT
