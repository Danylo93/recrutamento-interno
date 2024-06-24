// src/app/access-denied/access-denied.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  template: `
    <div class="access-denied">
      <h1>Access Denied</h1>
      <p>You do not have permission to view this page.</p>
    </div>
  `,
  styles: [`
    .access-denied {
      text-align: center;
      margin-top: 50px;
    }
  `]
})
export class AccessDeniedComponent {}
