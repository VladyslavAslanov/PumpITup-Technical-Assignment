import { createContext, useState, ReactNode } from 'react'
import { IRecipient } from '../interfaces/IRecipient.ts'
import { Roles } from '../interfaces/IRole.ts'

interface RecipientsContextType {
  recipients: IRecipient[];
  updateRole: (id: string, newRole: Roles) => void;
}

export const RecipientsContext = createContext<RecipientsContextType | null>(null)

const initialRecipients: IRecipient[] = [
  {
    avatar: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS2CHe7B3Ca4IP1HBjFALkqkeU43BjeDYAtGuP32PxP2XPSZWnByb0xArOAOEdP5lcykP_lUkxAM4HUkK8',
    name: 'Elon Musk',
    email: 'elon.musk@tesla.com',
    role: Roles.Admin,
    id: 'e1a7b8c3-4f41-4b47-b2ad-9f9de2b8e889',
  },
  {
    avatar: 'https://static01.nyt.com/images/2024/12/04/multimedia/04dealbook-summit-sundar-pichai-lpvc/04dealbook-summit-sundar-pichai-lpvc-mediumSquareAt3X.jpg',
    name: 'Sundar Pichai',
    email: 'sundar.pichai@google.com',
    role: Roles.Editor,
    id: 'f3b6c5d8-9325-48de-b5a9-24a4c24cbb29',
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmLKaZBDEhia_XnEL74pwvkPnUOVt6bl770rWuUV0zC9CasA-IAprXmzg_R4qHNzi3QQYd3DVZd5ENZOVzwkxgQ',
    name: 'Jeff Bezos',
    email: 'jeff.bezos@amazon.com',
    role: Roles.Viewer,
    id: 'g9f2a1c3-57bd-4a7e-82d9-b3c61e5f2c89',
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrZxfxDuOYeoHp7X9pi_y7zffPCZbUR0QVPvenLM9pDn8Zphw5UkIprk38AD9JAw3NXcQmP0QpxE8A2jhzDKXUQ',
    name: 'Bill Gates',
    email: 'bill.gates@microsoft.com',
    role: Roles.Viewer,
    id: 'h4c5b2f6-9d75-4cb1-89f7-2e6c9b4d8a2c',
  },
  {
    avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCL9eyWoLXmTfSGwTvH2ZVFMCQIyy7SqD-nyaFbrukZRE0IAKAf3kvZQyVM0d0QItdemcDT9Kkm9yXC-zxMYoxsQ',
    name: 'Mark Zuckerberg',
    email: 'mark.zuckerberg@meta.com',
    role: Roles.Editor,
    id: 'j7a1d2b5-83c9-4e7f-90ad-8f2c7d4b1e35',
  },
  {
    avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcvkis4xm8lwEjTUpieGsxFMUXY9EdQSlEs-JW-qoQjrzXFi2OmXzGr12Ena1Dl6HZpxMaIGtrBLAmTou80kIgeg',
    name: 'Linus Torvalds',
    email: 'linus.torvalds@linux.org',
    role: Roles.Viewer,
    id: 'a9b4c6d7-1e5f-4cb3-98a3-7c2d1e5b9f46',
  },
  {
    avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSNNjDz7uHJrOMnV9Adof1qCnhV_GpC7GslJUbUOSSNsyIDPiVTPTYzRgqI9kiXhVzTFKgRM-vv6Fvuc8CLbpxCYg',
    name: 'Nikola Tesla',
    email: 'nikola.tesla@science.com',
    role: Roles.Viewer,
    id: 'b8c7d4e5-2a6f-48a1-83b9-7c1e5f2c9d47',
  },
  {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg',
    name: 'Marie Curie',
    email: 'marie.curie@science.com',
    role: Roles.Editor,
    id: 'c5d8b4a7-3e6f-42b9-90ad-7f2c1e5d8a3f',
  },
  {
    avatar: 'https://hips.hearstapps.com/hmg-prod/images/albert-einstein-sticks-out-his-tongue-when-asked-by-news-photo-1681316749.jpg',
    name: 'Albert Einstein',
    email: 'albert.einstein@physics.com',
    role: Roles.Admin,
    id: 'd4c7b8f5-2e6f-42a9-81d3-5f2c9b4e7a35',
  },
  {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg',
    name: 'Stephen Hawking',
    email: 'stephen.hawking@cosmos.com',
    role: Roles.Viewer,
    id: 'e3d9a7b4-6c5f-48a1-92b3-4e7f2c1d5a89',
  },
]

export const RecipientsProvider = ({ children }: { children: ReactNode }) => {
  const [recipients, setRecipients] = useState<IRecipient[]>(initialRecipients)

  const updateRole = (id: string, newRole: Roles) => {
    setRecipients((prev) =>
      prev.map((recipient) =>
        recipient.id === id ? { ...recipient, role: newRole } : recipient,
      ),
    )
  }

  return (
    <RecipientsContext.Provider value={{ recipients, updateRole }}>
      {children}
    </RecipientsContext.Provider>
  )
}
