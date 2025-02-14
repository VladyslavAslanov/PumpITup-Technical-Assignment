import { Roles } from './IMocks.ts'

export interface IRecipient {
  avatar: string;
  name: string;
  email?: string;
  role: Roles;
}