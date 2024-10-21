import {StrictMode} from 'react'
import {createRoot } from 'react-dom/client'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
const root = createRoot(document.getElementById('root'));

root.render(<StrictMode>
    <BrowserRouter basename='/landing'>  
  <Routes>
        <Route path="/home" element ={<p>Home Page</p>} /> {/* 👈 Renders at /app/ */}
        <Route path="/test" element ={<p>Test route</p>} /> {/* 👈 Renders at /app/ */}
        <Route path="/blog/:slug" element ={<p>Blog post</p>} /> {/* 👈 Renders at /app/ */}
      </Routes>
  </BrowserRouter>
</StrictMode>,
)