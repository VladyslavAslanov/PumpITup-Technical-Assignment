import { Box, Button } from '@mui/material'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'

const actionButtons = [
  { icon: <CodeOutlinedIcon />, text: 'Get Embed Code' },
  { icon: <InsertLinkOutlinedIcon />, text: 'Copy Links' },
]

const Footer = () => {
  return (
    <Box className="flex justify-between items-centers">
      <Button variant="contained" className="px-6">
        Done
      </Button>

      <Box className="flex gap-4">
        {actionButtons.map((button, index) => (
          <Button key={index} startIcon={button.icon} variant="outlined">
            {button.text}
          </Button>
        ))}
      </Box>
    </Box>
  )
}

export default Footer
