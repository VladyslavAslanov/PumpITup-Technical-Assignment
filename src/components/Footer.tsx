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
    <Box className="flex justify-between items-center">
      <Button variant="contained" sx={{ px: 6 }}>
        Done
      </Button>

      <Box className="flex gap-4">
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
