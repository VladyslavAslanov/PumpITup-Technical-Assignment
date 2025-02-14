import { Box, TextField, Typography, InputAdornment, IconButton } from '@mui/material'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import { useState } from 'react'

const documentLink = 'https://www.setproduct.com/resources/agency/thisisthelin'

const ShareDocumentLink = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(documentLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 5000)
  }

  return (
    <Box className="flex flex-col">
      <Typography className="text-sm text-gray-600 font-medium">Document Link</Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={documentLink}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleCopy} edge="end">
                  <ContentCopyOutlinedIcon className="cursor-pointer text-gray-500" />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      {copied && <Typography className="text-green-600 text-sm">✅ Link copied!</Typography>}
    </Box>
  )
}

export default ShareDocumentLink
