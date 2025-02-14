import React from 'react'
import { Box, Typography } from '@mui/material'
import Recipient from '../atoms/Recipient.tsx'
import { useRecipients } from '../hooks/useRecipients.ts'

const Recipients: React.FC = React.memo(() => {
  const { recipients } = useRecipients()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, color: 'gray.700' }}>
        Recipients
      </Typography>

      <Box
        role="list"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          overflowY: 'auto',
          maxHeight: 300,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': { width: 4 },
          '&::-webkit-scrollbar-thumb': { backgroundColor: '#bbb', borderRadius: 2 },
        }}
      >
        {recipients.length > 0 ? (
          recipients.map((recipient) => <Recipient {...recipient} key={recipient.id} />)
        ) : (
          <Typography sx={{ textAlign: 'center', color: 'gray.500', fontStyle: 'italic' }}>
            No recipients found
          </Typography>
        )}
      </Box>
    </Box>
  )
})

export default Recipients
