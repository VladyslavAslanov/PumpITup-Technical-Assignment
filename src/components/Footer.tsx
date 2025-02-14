import { Box, Button } from '@mui/material'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'

const Footer = () => {
  return (
    <Box className="flex justify-between items-center">
      <Button variant="contained">Done</Button>
      <Box className="flex gap-8">
        <Button startIcon={<CodeOutlinedIcon />}>
          Get embed Code
        </Button>

        <Button startIcon={<InsertLinkOutlinedIcon />}>
          Copy Links
        </Button>
      </Box>
    </Box>
  )
}

export default Footer