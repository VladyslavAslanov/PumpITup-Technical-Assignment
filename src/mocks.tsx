import { IMocks, Roles } from './interfaces/IMocks.ts'

export const mocks: IMocks = {
  recipients: [
    {
      avatar: '',
      name: 'Perry Willmon',
      email: 'lexie49@bogisich.org',
      role: Roles.Viewer,
    },
    {
      avatar: '',
      name: 'Adan Lauzon',
      email: 'ottis.kuhic@upton.com',
      role: Roles.Viewer,
    },
    {
      avatar: '',
      name: 'Leo Stanton',
      email: 'hans.shanahan@heaney.info',
      role: Roles.Admin,
    },
    {
      avatar: '',
      name: 'Val Purvis',
      email: 'cpowlowski@yahoo.com',
      role: Roles.Editor,
    },
  ],
}