import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstGigLandingPage from "./App";
import MVPPage from "./components/MVPPage";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstGigLandingPage />} />
        <Route path="/mvp" element={<MVPPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
