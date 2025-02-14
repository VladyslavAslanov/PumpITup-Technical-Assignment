import { Roles } from './IRole.ts'

export interface IRecipient {
  avatar: string;
  name: string;
  email?: string;
  role: Roles;
  id?: string;
}