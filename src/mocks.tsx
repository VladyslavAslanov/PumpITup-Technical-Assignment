import { IMocks, Roles } from './interfaces/IMocks.ts'

export const mocks: IMocks = {
  recipients: [
    {
      avatar: '',
      name: 'Perry Willmon',
      email: 'lexie49@bogisich.org',
      role: Roles.Viewer,
      id: '2041a93c-7573-44a8-a3fd-5d182eea548c',
    },
    {
      avatar: '',
      name: 'Adan Lauzon',
      email: 'ottis.kuhic@upton.com',
      role: Roles.Viewer,
      id: '930abe8b-b5e3-4bf0-9415-502bc3087161',
    },
    {
      avatar: '',
      name: 'Leo Stanton',
      email: 'hans.shanahan@heaney.info',
      role: Roles.Admin,
      id: 'fb842c29-b228-447c-ae62-3b38059480b4',
    },
    {
      avatar: '',
      name: 'Val Purvis',
      email: 'cpowlowski@yahoo.com',
      role: Roles.Editor,
      id: 'ddd34fb3-6e8d-49f4-80e2-57f6f326fcfc',
    },
  ],
}