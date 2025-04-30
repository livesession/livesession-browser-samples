import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CounterComponent } from './counter/counter.component';

import ls from "@livesession/browser";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular + LiveSession';

  ngOnInit() {
    ls.init(import.meta.env['NG_APP_LIVESESSION_TRACK_ID'] || "YOUR_TRACK_ID")
    
    ls.newPageView()
  }
}
