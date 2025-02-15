import React from 'react'
import { Box, Button } from '@mui/material'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'

const actionButtons: { icon: React.ReactNode; text: string }[] = [
  { icon: <CodeOutlinedIcon />, text: 'Get Embed Code' },
  { icon: <InsertLinkOutlinedIcon />, text: 'Copy Links' },
]

const Footer: React.FC = React.memo(() => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button variant="contained">
        Done
      </Button>

      <Box sx={{ display: 'flex', gap: 2 }}>
        {actionButtons.map(({ icon, text }, index) => (
          <Button key={index} startIcon={icon} variant="outlined">
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  )
})

export default Footer
