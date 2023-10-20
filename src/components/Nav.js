import { useState } from "react"
import NavLink from './NavLink'

function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <header className="px-5 py-3 bg-gray-100 md:flex md:justify-betweenmd:items-center">
      <nav className="flex items-center justify-between">
        <div>
          <a href="/" className="font-bold">ALEX PARKER</a>
        </div>
        <div className="md:hidden">
          <button type="button" className="relative z-10 block text-gray-800" onClick={handleOpen}>
            <svg className="w-8 h-8 fill-current" viewBox='0 0 24 24' width='30'>
              {
                open ?
                  <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  :
                  <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              }
            </svg>
          </button>
          {open && <button onClick={() => setOpen(false)} className="absolute inset-0 w-full h-full bg-transparent cursor-default" ></button>}
        </div>
      </nav>
      <div className={"text-right absolute right-0 px-2 py-2 rounded shadow-xl bg-gray-100 md:flex" + (open ? ' block' : ' hidden')} id="navbar">
        <NavLink color="text-teal-500" href='#about'>ABOUT</NavLink>
        <NavLink color="text-yellow-600" href='#projects'>PROJECTS</NavLink>
        <NavLink color="text-red-500" href='#experience'>EXPERIENCE</NavLink>
        <NavLink color="text-pink-600" href='#contact'>CONTACT</NavLink>
      </div>
    </header>
  )
}

export default Header