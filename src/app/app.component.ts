// src/app/app.component.ts
import { Component } from '@angular/core';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { ClientListComponent } from './client-list/client-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClientRegistrationComponent, ClientListComponent],
  template: `
    <h1>Client Management</h1>
    <app-client-registration></app-client-registration>
    <app-client-list></app-client-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
