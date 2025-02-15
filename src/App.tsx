import { Box, CircularProgress } from '@mui/material'
import { Suspense, lazy, ComponentType } from 'react'
import { RecipientsProvider } from './context/RecipientsContext.tsx'

const lazyLoadWithDelay = <T extends ComponentType<ComponentType>>(
  importFunc: () => Promise<{ default: T }>,
  delay: number = 1500,
) => {
  return lazy(() =>
    new Promise<{ default: T }>((resolve) =>
      setTimeout(async () => {
        const module = await importFunc()
        resolve({ default: module.default })
      }, delay),
    ),
  )
}

const components = [
  { id: 'Header', component: lazyLoadWithDelay(() => import('./components/Header.tsx')) },
  { id: 'ShareDocumentLink', component: lazyLoadWithDelay(() => import('./components/ShareDocumentLink.tsx')) },
  { id: 'SearchRecipients', component: lazyLoadWithDelay(() => import('./components/SearchRecipients.tsx')) },
  { id: 'Recipients', component: lazyLoadWithDelay(() => import('./components/Recipients.tsx')) },
  { id: 'PrivacySettings', component: lazyLoadWithDelay(() => import('./components/PrivacySettings.tsx')) },
  { id: 'Footer', component: lazyLoadWithDelay(() => import('./components/Footer.tsx')) },
]

const App = () => {
  return (
    <RecipientsProvider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 4 },
          backgroundColor: 'white',
          boxShadow: 3,
          borderRadius: 2,
          padding: { xs: 2, sm: 3 },
          mx: 4,
          my: 4,
          width: '100%',
          maxWidth: { xs: '95%', sm: '720px' },
          minHeight: '100vh',
        }}
      >
        <Suspense
          fallback={
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
              }}
            >
              <CircularProgress />
            </Box>
          }
        >

          {components.map(({ id, component: Component }) => {
            const LazyComponent = Component
            return <LazyComponent key={id} />
          })}
        </Suspense>
      </Box>
    </RecipientsProvider>
  )
}

export default App
