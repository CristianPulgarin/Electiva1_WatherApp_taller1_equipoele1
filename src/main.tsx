import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Interface } from './components/Interface'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Interface/>

  </StrictMode>,
)
