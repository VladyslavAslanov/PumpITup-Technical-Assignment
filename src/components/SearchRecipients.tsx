import { useRef, useState } from 'react'
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  FormControl,
  FormHelperText,
} from '@mui/material'

enum PermissionOptions {
  Viewer = 'Viewer',
  Editor = 'Editor',
  Admin = 'Admin',
}

const SearchRecipients = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [permission, setPermission] = useState<PermissionOptions>(PermissionOptions.Viewer)
  const [emailError, setEmailError] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleShare = () => {
    const email = emailRef.current?.value.trim() || ''

    if (!email) {
      setEmailError('Email is required.')
      setSuccessMessage('')
      return
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email.')
      setSuccessMessage('')
      return
    }

    setEmailError('')
    setSuccessMessage(`Shared successfully with ${email}`)

    if (emailRef.current) {
      emailRef.current.value = ''
    }

    setTimeout(() => setSuccessMessage(''), 3000)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="body2" sx={{ fontWeight: 300 }}>
        Search Recipients
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, alignItems: 'start' }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            placeholder="Search for name or email"
            variant="outlined"
            inputRef={emailRef}
            error={!!emailError}
          />
          {(emailError || successMessage) && (
            <FormHelperText sx={{ color: emailError ? 'red' : 'green', margin: 0, position: 'absolute', top: 60 }}>
              {emailError || successMessage}
            </FormHelperText>
          )}
        </FormControl>

        <TextField
          select
          variant="outlined"
          value={permission}
          onChange={(e) => setPermission(e.target.value as PermissionOptions)}
          sx={{ width: 220 }}
        >
          {Object.values(PermissionOptions).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          color="primary"
          onClick={handleShare}
          sx={{ height: 55, padding: '0px 25px', textTransform: 'none' }}>
          Share
        </Button>
      </Box>
    </Box>
  )
}

export default SearchRecipients
