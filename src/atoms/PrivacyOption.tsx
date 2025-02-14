import React from 'react'
import { Box, Typography } from '@mui/material'
import { IPrivacyOption } from '../interfaces/IPrivacyOption.ts'

const PrivacyOption: React.FC<IPrivacyOption> = React.memo(({ icon: Icon, text, action = null }) => {
  return (
    <Box className="flex justify-between items-center w-full">
      <Box className="flex items-center gap-2">
        {Icon && <Icon />}
        <Typography>{text}</Typography>
      </Box>

      {action && (
        <Box className="flex items-center gap-2 cursor-pointer">
          {action}
        </Box>
      )}
    </Box>
  )
})

export default PrivacyOption
