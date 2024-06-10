import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent {
  newClient: { name: string; email: string } = { name: '', email: '' };

  constructor(private clientService: ClientService) {}

  registerClient() {
    if (this.newClient.name && this.newClient.email) {
      this.clientService.addClient(this.newClient);
      this.newClient = { name: '', email: '' };
    } else {
      // Handle form validation errors
      console.error('Name and email are required');
    }
  }
}
