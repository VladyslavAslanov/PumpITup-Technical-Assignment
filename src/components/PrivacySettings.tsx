import { Box, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import PrivacyOption from '../atoms/PrivacyOption.tsx'

const PrivacySettings = () => {
  return (
    <Box className="flex flex-col gap-4">
      <Typography className="font-bold text-lg">Privacy Settings</Typography>

      <PrivacyOption
        icon={AccountCircleOutlinedIcon}
        text="Anyone at Project can view and edit"
        action={
          <>
            <Typography>Change Access</Typography>
            <KeyboardArrowDownOutlinedIcon />
          </>
        }
      />

      <PrivacyOption
        icon={InsertLinkOutlinedIcon}
        text="Anyone with the link can edit"
        action={
          <Typography className="text-blue-500 cursor-pointer">Set Password</Typography>
        }
      />
    </Box>
  )
}

export default PrivacySettings