import { Button } from './ui/button'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="py-5 border-gray-700 border-b-2 md:py-0 flex md:flex-row gap-4 md:gap-0 h-14 justify-around items-center dark:bg-gray-900">
        {/* brand */}
        <div className='font-semibold items-center flex gap-2'>
            <span className='flex text-center h-6 w-6 bg-linear-to-r from-primary to-primary/40 rounded-md'>{"A"}</span>
            <span className="text-base tracking-tight">Auth App</span>
        </div>

        <div className='flex gap-4 items-center'>
            <NavLink to={"/"}>
                <Button variant={"outline"} className='cursor-pointer' size={"sm"}>Home</Button>
            </NavLink>
            <NavLink to={"/login"}>
                <Button variant={"outline"} className='cursor-pointer' size={"sm"}>Login</Button>
            </NavLink>
            <NavLink to={"/signup"}>
                <Button variant={"outline"} className='cursor-pointer' size={"sm"}>Signup</Button>
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar