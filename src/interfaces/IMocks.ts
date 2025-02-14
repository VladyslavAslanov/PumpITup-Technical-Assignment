import { IRecipient } from './IRecipient.ts'

export enum Roles {
  Viewer = 'viewer',
  Editor = 'editor',
  Admin = 'admin',
}

export interface IMocks {
  recipients: IRecipient[];
}