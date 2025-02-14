import { Box, Button, Typography } from '@mui/material'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'

const Footer = () => {
  return (
    <Box className="flex justify-between items-center">
      <Button>Done</Button>
      <Box className="flex gap-8">
        <Button className="flex gap-3">
          <CodeOutlinedIcon />
          <Typography>Get embed Code</Typography>
        </Button>

        <Button className="flex gap-3">
          <InsertLinkOutlinedIcon />
          <Typography>Copy Links</Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Footer