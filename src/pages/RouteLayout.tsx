
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const RouteLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default RouteLayout