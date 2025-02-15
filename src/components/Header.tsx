import React from 'react'
import { Typography, Box } from '@mui/material'

const Header: React.FC = React.memo(() => {
  return (
    <Box>
      <Typography variant="h5" component="h1">
        Share Project
      </Typography>
    </Box>
  )
})

export default Header
