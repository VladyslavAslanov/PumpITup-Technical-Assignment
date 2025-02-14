import { Box, TextField, Typography } from '@mui/material'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import { useState } from 'react'

const ShareDocumentLink = () => {
  const [value] = useState('https://www.setproduct.com/resources/agency/thisisthelin')
  return (
    <Box>
      <Typography>Document Link</Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={value}
        className="rounded-xl p-1"
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