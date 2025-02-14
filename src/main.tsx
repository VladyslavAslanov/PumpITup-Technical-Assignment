import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element #root not found in the document.')
}

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
