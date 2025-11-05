import { Apartment } from './apartment';

export class Customer {
  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;
  address?: string;
  registeredAt?: Date;
  apartments?: string[]; 
}