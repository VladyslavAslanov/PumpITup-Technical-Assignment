import React, { useState } from 'react'
import { Box, Typography, Select, MenuItem, Button } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import PrivacyOption from '../atoms/PrivacyOption.tsx'
import { IPrivacyOption } from '../interfaces/IPrivacyOption.ts'

const PrivacySettings: React.FC = React.memo(() => {
  const [access, setAccess] = useState('')

  const privacyOptions: IPrivacyOption[] = [
    {
      icon: AccountCircleOutlinedIcon,
      text: 'Anyone at Project can view and edit',
      action: (
        <Select
          value={access}
          onChange={(e) => setAccess(e.target.value)}
          variant="outlined"
          size="small"
          displayEmpty
          sx={{ minWidth: 150, textTransform: 'none' }}
          IconComponent={KeyboardArrowDownOutlinedIcon}
        >
          <MenuItem value="" disabled>
            Change Access
          </MenuItem>
          <MenuItem value="view">Can View</MenuItem>
          <MenuItem value="edit">Can Edit</MenuItem>
        </Select>
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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Privacy Settings</Typography>

      {privacyOptions.map((option, index) => (
        <PrivacyOption key={index} {...option} />
      ))}
    </Box>
  )
})

export default PrivacySettings
