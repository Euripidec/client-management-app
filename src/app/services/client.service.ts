import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [];

  addClient(client: { name: string; email: string }) {
    const newClient: Client = {
      ...client,
      registrationDate: new Date(),
      userType: Math.random() > 0.5 ? 'Regular' : 'Premium',
      isLateWithPayment: Math.random() > 0.5
    };
    this.clients.push(newClient);
  }

  getClients(): Client[] {
    return this.clients;
  }
}
