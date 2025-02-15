import { useState } from 'react'
import { Box, Button, MenuItem, TextField, Typography, FormControl, FormHelperText } from '@mui/material'
import { Form, Field } from 'react-final-form'

enum PermissionOptions {
  Viewer = 'Viewer',
  Editor = 'Editor',
  Admin = 'Admin',
}

const validateEmail = (email: string): string | undefined => {
  if (!email) return 'Email is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email.'
}

const SearchRecipients = () => {
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [permission, setPermission] = useState<PermissionOptions>(PermissionOptions.Viewer)

  const handleShare = (values: { email: string }) => {
    setSuccessMessage(`Shared successfully with ${values.email}`)

    setTimeout(() => setSuccessMessage(''), 3000)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="body2" sx={{ fontWeight: 300 }}>
        Search Recipients
      </Typography>

      <Form
        onSubmit={handleShare}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'start' }}>
              <Field name="email" validate={validateEmail}>
                {({ input, meta }) => (
                  <FormControl fullWidth>
                    <TextField
                      {...input}
                      fullWidth
                      placeholder="Search for name or email"
                      variant="outlined"
                      error={!!(meta.touched && meta.error)}
                    />
                    {meta.touched && meta.error && (
                      <FormHelperText sx={{ color: 'red', margin: 0, position: 'absolute', top: 60 }}>
                        {meta.error}
                      </FormHelperText>
                    )}
                    {successMessage && (
                      <FormHelperText sx={{ color: 'green', margin: 0, position: 'absolute', top: 60 }}>
                        {successMessage}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              </Field>

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
                type="submit"
                sx={{ height: 55, padding: '0px 25px', textTransform: 'none' }}
              >
                Share
              </Button>
            </Box>
          </form>
        )}
      />
    </Box>
  )
}

export default SearchRecipients
