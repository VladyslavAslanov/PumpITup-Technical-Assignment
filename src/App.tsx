import { Box, CircularProgress } from '@mui/material'
import { Suspense, lazy, ComponentType } from 'react'
import { RecipientsProvider } from './context/RecipientsContext.tsx'

const lazyLoadWithDelay = <T extends ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  delay: number = 1000,
) => {
  return lazy(() =>
    new Promise<{ default: T }>((resolve) =>
      setTimeout(() => importFunc().then(resolve), delay),
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
        className="flex flex-col gap-8 bg-white shadow-lg rounded-lg p-8 my-12"
        sx={{ maxWidth: '720px' }}
      >
        <Suspense fallback={<Box className="flex justify-center"><CircularProgress /></Box>}>
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
