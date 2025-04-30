# LiveSession + Angular

This is a sample project that demonstrates how to integrate LiveSession
with an Angular application built with TypeScript.

## Prerequisites

1. LiveSession account, you can create one [here](https://app.livesession.io/).
2. `NG_APP_LIVESESSION_TRACK_ID` environment variable - you can add it to the `.env` file.
   Tracking ID can be found in the **LiveSession -> Settings -> Websites**.

## Getting Started

Clone this repository and install the dependencies:

```bash
git clone https://github.com/livesession/livesession-browser-samples

cd livesession-samples/angular

npm i
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:4200](http://localhost:4200).

## Sample overview

1. LiveSession [Browser SDK](https://github.com/livesession/livesession-browser) usage with autocapture events.

2. Basic example how to init LiveSession script in the `src/app/app.component.ts` file.

2. Basic example how to use [custom events](https://help.livesession.io/en/articles/8496404-custom-events)
   in the `src/app/counter/counter.component.ts` file (the `Counter` event name).
