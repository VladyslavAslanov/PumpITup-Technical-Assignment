import { useRef, useState } from 'react'
import { Box, Button, MenuItem, TextField, Typography, FormControl, FormHelperText } from '@mui/material'

enum PermissionOptions {
  CanView = 'Can View',
  CanEdit = 'Can Edit',
}

const SearchRecipients = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [permission, setPermission] = useState<PermissionOptions>(PermissionOptions.CanView)
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
    <Box className="flex flex-col gap-2">
      <Typography className="text-sm text-gray-600">Search Recipients</Typography>

      <Box className="flex gap-2 items-start">
        <FormControl fullWidth>
          <TextField
            fullWidth
            placeholder="Search for names or email..."
            variant="outlined"
            inputRef={emailRef}
            error={!!emailError}
          />
          {emailError && <FormHelperText className="!text-red-600 !m-0 absolute top-15">{emailError}</FormHelperText>}
          {successMessage && <FormHelperText className="!text-green-600 !m-0 absolute top-15">{successMessage}</FormHelperText>}
        </FormControl>

        <TextField
          select
          variant="outlined"
          value={permission}
          onChange={(e) => setPermission(e.target.value as PermissionOptions)}
          className="w-54"
        >
          {Object.values(PermissionOptions).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" color="primary" onClick={handleShare} className="h-full" sx={{ height: '100%' }}>
          Share
        </Button>
      </Box>
    </Box>
  )
}

export default SearchRecipients
