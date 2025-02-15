import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import PrivacyOption from '../atoms/PrivacyOption.tsx'
import { IPrivacyOption } from '../interfaces/IPrivacyOption.ts'

const privacyOptions: IPrivacyOption[] = [
  {
    icon: AccountCircleOutlinedIcon,
    text: 'Anyone at Project can view and edit',
    action: (
      <Button variant="outlined" sx={{ textTransform: 'none' }}>
        Change Access
      </Button>
    ),
  },
  {
    icon: InsertLinkOutlinedIcon,
    text: 'Anyone with the link can edit',
    action: (
      <Button variant="outlined" sx={{ textTransform: 'none' }}>
        Set Password
      </Button>
    ),
  },
]

const PrivacySettings: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography>Privacy Settings</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {privacyOptions.map((option, index) => (
          <PrivacyOption key={index} {...option} />
        ))}
      </Box>
    </Box>
  )
}

export default PrivacySettings
