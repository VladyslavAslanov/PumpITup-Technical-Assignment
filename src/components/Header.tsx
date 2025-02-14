import React from 'react'
import { Typography, Box } from '@mui/material'

const Header: React.FC = React.memo(() => {
  return (
    <Box sx={{ textAlign: 'center', mb: 2 }}>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 600, color: 'gray.800' }}>
        Share Project
      </Typography>
    </Box>
  )
})

export default Header
