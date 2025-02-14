import { IMocks } from './interfaces/IMocks.ts'
import { Roles } from './interfaces/IRole.ts'

export const mocks: IMocks = {
  recipients: [
    {
      avatar: 'https://miro.medium.com/v2/resize:fit:1200/1*VJQhanK3SjxTPT4Ifd0MSg.png',
      name: 'Steve Jobs',
      email: 'steve.jobs@apple.com',
      role: Roles.Viewer,
      id: '2041a93c-7573-44a8-a3fd-5d182eea548c',
    },
    {
      avatar: 'https://i.insider.com/63d93b280a08ae0018a62b4f?width=700',
      name: 'Sam Altman',
      email: 'sam.altman@openai.com',
      role: Roles.Viewer,
      id: '930abe8b-b5e3-4bf0-9415-502bc3087161',
    },
    {
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg',
      name: 'Vitalik Buterin',
      email: 'vitalik.buterin@ethereum.com',
      role: Roles.Admin,
      id: 'fb842c29-b228-447c-ae62-3b38059480b4',
    },
    {
      avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8_poSu1DqocqEPqUHapBZw8S7ArDHWKba3ZJyvm_qJrZ_AmKnRZtR3ygoapVb4M29g1XL8tbmah4s8D7JXbMZ-Q',
      name: 'Sergey Brin',
      email: 'sergey.brin@google.com',
      role: Roles.Editor,
      id: 'ddd34fb3-6e8d-49f4-80e2-57f6f326fcfc',
    },
  ],
}