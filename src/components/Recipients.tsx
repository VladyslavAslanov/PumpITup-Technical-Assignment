import { Box, Typography } from '@mui/material'
import Recipient from '../atoms/Recipient.tsx'
import { useRecipients } from '../hooks/useRecipients.ts'

const Recipients = () => {
  const { recipients } = useRecipients()

  return (
    <Box className="flex flex-col gap-4">
      <Typography className="font-semibold text-gray-700">Recipients</Typography>

      <Box className="flex flex-col gap-4 overflow-y-auto" sx={{ maxHeight: '300px', scrollbarWidth: 'thin' }}>
        {recipients.length > 0 ? (
          recipients.map((recipient) => <Recipient {...recipient} key={recipient.id} />)
        ) : (
          <Typography className="text-center text-gray-500 italic">No recipients found</Typography>
        )}
      </Box>
    </Box>
  )
}

export default Recipients
