import { useState, useEffect } from 'react'
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'

const documentLink = 'https://www.setproduct.com/resources/agency/thisisthelin'

const ShareDocumentLink = () => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    if (copied) {
      timer = setTimeout(() => setCopied(false), 3000)
    }
    return () => clearTimeout(timer)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(documentLink)
      setCopied(true)
    } catch (error) {
      console.error('Failed to copy text:', error)
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="body2" sx={{ color: 'gray.600', fontWeight: 500 }}>
        Document Link
      </Typography>

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

      {copied && (
        <Typography sx={{ color: 'green', fontSize: '0.875rem' }}>
          Link copied!
        </Typography>
      )}
    </Box>
  )
}

export default ShareDocumentLink
