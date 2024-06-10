export interface Client {
  name: string;
  email: string;
  registrationDate: Date;
  userType: 'Regular' | 'Premium';
  isLateWithPayment: boolean;
}
