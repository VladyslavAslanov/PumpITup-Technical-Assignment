import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { mocks } from '../mocks.tsx'
import Recipient from '../atoms/Recipient.tsx'
import { IRecipient } from '../interfaces/IRecipient.ts'

const Recipients = () => {
  const [recipients, setRecipients] = useState<IRecipient[]>([])

  useEffect(() => {
    setRecipients(mocks.recipients)
  }, [])

  return (
    <Box>
      <Typography>Recipients</Typography>
      <Box className="flex flex-col gap-4">
        {recipients.length > 0 ?
          recipients.map((recipient) => (
            <Recipient
              avatar={recipient.avatar}
              name={recipient.name}
              role={recipient.role}
              email={recipient.email}
              key={recipient.id}
            />
          ))
          : <Typography className="text-center">No recipients found</Typography>}
      </Box>
    </Box>
  )
}

export default Recipients