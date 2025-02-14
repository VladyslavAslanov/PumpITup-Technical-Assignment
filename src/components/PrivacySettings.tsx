import React from 'react'
import { Box, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import PrivacyOption from '../atoms/PrivacyOption.tsx'
import { IPrivacyOption } from '../interfaces/IPrivacyOption.ts'


const privacyOptions: IPrivacyOption[] = [
  {
    icon: AccountCircleOutlinedIcon,
    text: 'Anyone at Project can view and edit',
    action: (
      <>
        <Typography>Change Access</Typography>
        <KeyboardArrowDownOutlinedIcon />
      </>
    ),
  },
  {
    icon: InsertLinkOutlinedIcon,
    text: 'Anyone with the link can edit',
    action: <Typography sx={{ color: 'text-blue-500', cursor: 'pointer' }}>Set Password</Typography>,
  },
]

const PrivacySettings: React.FC = React.memo(() => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, color: 'gray.700' }}>
        Privacy Settings
      </Typography>

      {privacyOptions.map((option, index) => (
        <PrivacyOption key={index} {...option} />
      ))}
    </Box>
  )
})

export default PrivacySettings
