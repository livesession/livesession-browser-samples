import { bootstrapApplication } from '@angular/platform-browser';

import ls from "@livesession/sdk";

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

try {
  ls.init(import.meta.env['NG_APP_LIVESESSION_TRACK_ID'] || "YOUR_TRACK_ID")
  ls.newPageView()
} catch(e) {
  console.error(e)
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
