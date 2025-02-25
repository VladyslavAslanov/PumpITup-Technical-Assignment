import React from 'react'
import { Typography, Box } from '@mui/material'

const Header: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" component="h1" sx={{ fontSize: 22 }}>
        Share Project
      </Typography>
    </Box>
  )
}

export default Header
