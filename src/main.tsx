import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Interface } from './components/Interface'
import { GetApi } from './components/GetApi'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    {/* <Interface/>
     */}

  <GetApi/>
  </StrictMode>,
)
