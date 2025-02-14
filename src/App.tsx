import { Box } from '@mui/material'
import PrivacySettings from './components/PrivacySettings.tsx'
import Footer from './components/Footer.tsx'
import Recipients from './components/Recipients.tsx'
import ShareDocumentLink from './components/ShareDocumentLink.tsx'
import SearchRecipients from './components/SearchRecipients.tsx'
import Header from './components/Header.tsx'
import { RecipientsProvider } from './context/RecipientsContext.tsx'

const App = () => {
  return (
    <RecipientsProvider>
      <Box
        className="flex flex-col gap-8 bg-white shadow-lg rounded-lg p-8 mx-auto my-12"
        sx={{ maxWidth: '720px' }}
      >
        <Header />
        <ShareDocumentLink />
        <SearchRecipients />
        <Recipients />
        <PrivacySettings />
        <Footer />
      </Box>
    </RecipientsProvider>
  )
}

export default App
