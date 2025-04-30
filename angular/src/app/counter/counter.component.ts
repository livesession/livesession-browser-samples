import { Component } from '@angular/core';
import ls from '@livesession/browser';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="card">
      <button type="button" (click)="increment()">count is {{ count }}</button>
    </div>
  `,
  styles: [`
    .card {
      padding-top: 2em;
    }
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
    @media (prefers-color-scheme: light) {
      button {
        background-color: #f9f9f9;
      }
    }
  `]
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
    ls.track('Counter', { value: this.count });
  }
} 