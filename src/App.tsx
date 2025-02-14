import { Box, Typography } from '@mui/material'
import PrivacySettings from './components/PrivacySettings.tsx'

const App = () => {
  return (
    <Box className="rounded-lg shadow-lg w-xl bg-white">
      <Typography variant="h2">Share Project</Typography>
      <PrivacySettings />
    </Box>
  )
}

export default App
