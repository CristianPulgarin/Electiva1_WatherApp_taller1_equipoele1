import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GetApi } from './components/GetApi'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    {/* <Interface/>
     */}

  <GetApi/>
  </StrictMode>,
)
