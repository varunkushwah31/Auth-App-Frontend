import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Services from './pages/Services.tsx'
import Signup from './pages/Signup.tsx'
import About from './pages/About.tsx'
import Login from './pages/Login.tsx'
import RouteLayout from './pages/RouteLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<RouteLayout />}>
          <Route index element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
    </Routes>
  </BrowserRouter>
)
