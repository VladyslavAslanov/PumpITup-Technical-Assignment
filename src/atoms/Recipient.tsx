import React from 'react'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { IRecipient } from '../interfaces/IRecipient.ts'

const Recipient: React.FC<IRecipient> = ({ name, email, avatar, role }) => {
  return (
    <Box className="flex justify-between items-center  gap-4">
      <Box className="flex items-center gap-2">
        <Avatar src={avatar} />
        <Box className="flex flex-col">
          <Typography>{name}</Typography>
          <Typography>{email}</Typography>
        </Box>
      </Box>

      <Button>{role}</Button>
    </Box>
  )
}

export default Recipient