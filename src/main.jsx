import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstGigLandingPage from "./App";
import MVPPage from "./components/MVPPage";
import { ClerkProvider } from '@clerk/clerk-react'
// Import your Publishable Key
const PUBLISHABLE_KEY = "pk_test_Z2FtZS13aWxkY2F0LTguY2xlcmsuYWNjb3VudHMuZGV2JA"

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <Routes>
            <Route path="/" element={<FirstGigLandingPage />} />
            <Route path="/mvp" element={<MVPPage />} />
          </Routes>
        </BrowserRouter>
      </ClerkProvider>
  </StrictMode>,
)
