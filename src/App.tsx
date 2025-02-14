import { Box, Typography } from '@mui/material'
import PrivacySettings from './components/PrivacySettings.tsx'
import Footer from './components/Footer.tsx'
import Recipients from './components/Recipients.tsx'
import ShareDocumentLink from './atoms/ShareDocumentLink.tsx'
import SearchRecipients from './atoms/SearchRecipients.tsx'

const App = () => {
  return (
    <Box className="flex flex-col gap-8 rounded-lg shadow-lg w-xl bg-white p-8">
      <Typography variant="h5">Share Project</Typography>
      <ShareDocumentLink />
      <SearchRecipients />
      <Recipients />
      <PrivacySettings />
      <Footer />
    </Box>
  )
}

export default App
