import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'

const SearchRecipients = () => {
  return (
    <Box className="flex flex-col gap-4">
      <Typography className="text-sm text-gray-600">Search recipients</Typography>
      <Box className="flex gap-2">
        <TextField fullWidth placeholder="Search for names or email..." variant="outlined" />
        <TextField select defaultValue="Can View" variant="outlined" className="w-36">
          <MenuItem value="Can View">Can View</MenuItem>
          <MenuItem value="Can Edit">Can Edit</MenuItem>
        </TextField>
        <Button variant="contained" className="bg-blue-600 text-white px-6">
          Share
        </Button>
      </Box>

    </Box>
  )
}

export default SearchRecipients