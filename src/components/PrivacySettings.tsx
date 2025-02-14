import { Box, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import PrivacyOption from '../atoms/PrivacyOption.tsx'

const privacyOptions = [
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
    action: <Typography className="text-blue-500 cursor-pointer">Set Password</Typography>,
  },
]

const PrivacySettings = () => {
  return (
    <Box className="flex flex-col gap-4">
      <Typography variant="h6" className="font-semibold text-gray-700">
        Privacy Settings
      </Typography>

      {privacyOptions.map((option, index) => (
        <PrivacyOption key={index} {...option} />
      ))}
    </Box>
  )
}

export default PrivacySettings
