import React from 'react'
import { Box, Typography } from '@mui/material'
import { IPrivacyOption } from '../interfaces/IPrivacyOption.ts'

const PrivacyOption: React.FC<IPrivacyOption> = React.memo(({ icon: Icon, text, action }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {Icon && <Icon color="#A1A1A1" />}
        <Typography sx={{ fontWeight: 300 }}>{text}</Typography>
      </Box>

      {action && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
          {action}
        </Box>
      )}
    </Box>
  )
})

export default PrivacyOption
