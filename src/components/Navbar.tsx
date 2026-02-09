import { Button } from './ui/button'
import { Switch } from './ui/switch'
import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        try {
            const stored = localStorage.getItem('theme')
            if (stored) return stored === 'dark'
            return document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
        } catch {
            return false
        }
    })

    useEffect(() => {
        try {
            if (isDark) {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
            }
        } catch {
            /* ignore */
        }
    }, [isDark])
  return (
    <nav className="py-5 border-gray-700 border-b-2 md:py-0 flex md:flex-row gap-4 md:gap-0 h-14 justify-around items-center">
        {/* brand */}
        <div className='font-semibold items-center flex gap-2'>
            <span className='inline-flex text-center h-6 w-6 bg-linear-to-r from-primary to-primary/40 rounded-md'>{"A"}</span>
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
            <div className="flex items-center gap-2">
              <span className="text-sm">{isDark ? 'Dark' : 'Light'}</span>
              <Switch
                checked={isDark}
                onCheckedChange={(val) => setIsDark(Boolean(val))}
                aria-label="Toggle dark mode"
                title="Toggle dark mode"
              />
            </div>
        </div>
    </nav>
  )
}

export default Navbar