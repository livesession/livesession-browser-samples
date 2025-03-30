# LiveSession + React (Vite and TypeScript)

This is a sample project that demonstrates how to integrate LiveSession
with a React application built with Vite and TypeScript.

## Prerequisites

1. LiveSession account, you can create one [here](https://app.livesession.io/).
2. `VITE_LIVESESSION_TRACK_ID` environment variable - you can add it to the `.env` file.
   Tracking ID can be found in the **LiveSession -> Settings -> Websites**.

## Getting Started

Clone this repository and install the dependencies:

```bash
git clone https://github.com/livesession/livesession-samples
cd livesession-samples/get-started/react
npm i
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Sample overview

1. LiveSession [Browser SDK](https://github.com/livesession/livesession-sdk) usage with autocapture events.

2. Basic example how to use [custom events](https://help.livesession.io/en/articles/8496404-custom-events)
   in the `src/App.tsx` file (the `Counter` event name).



