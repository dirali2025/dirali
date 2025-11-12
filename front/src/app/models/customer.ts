import { Apartment } from './apartment';

export class Customer {
  fName!: string;
  lastName!: string;
  email!: string;
  phone!: string;
  address?: string;
  registeredAt?: Date;
  apartments?: string[];
}
