import { Box, TextField, Typography } from '@mui/material'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'

const ShareDocumentLink = () => {
  return (
    <Box>
      <Typography className="text-sm text-gray-600">Document Link</Typography>
      <TextField
        fullWidth
        variant="outlined"
        value="https://www.setproduct.com/resources/agency/thisisthelin..."
        slotProps={{
          input: {
            endAdornment: <ContentCopyOutlinedIcon className="cursor-pointer text-gray-500" />,
          },
        }}
      />
    </Box>
  )
}

export default ShareDocumentLink