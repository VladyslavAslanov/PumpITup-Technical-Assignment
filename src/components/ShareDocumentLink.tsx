import { useState, useEffect } from 'react'
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'

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
      <Typography variant="body2" sx={{ fontWeight: 300 }}>
        Document Link
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={documentLink}
        inputProps={{
          style: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            cursor: 'pointer',
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleCopy} edge="end">
                  {copied ? (
                    <CheckOutlinedIcon sx={{ color: 'gray.500' }} />
                  ) : (
                    <ContentCopyOutlinedIcon sx={{ color: 'gray.500' }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  )
}

export default ShareDocumentLink
