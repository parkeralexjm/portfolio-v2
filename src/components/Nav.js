import { useState } from "react"
import { colorVariants } from "./utilities/helper"

function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const NavLink = ({ children, color, href }) => {
    const linkLayoutClasses = 'block text-gray-800 text-lg z-20 mx-2 px-2 py-2 transition ease-in-out duration-200 group transition-all'
    const finalLinkClasses = `${linkLayoutClasses} ${colorVariants.hover[color]}`
    return (
      <a className={`${finalLinkClasses} relative ${colorVariants.transition[color]} after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`} href={href} onClick={() => setOpen(false)}>
        {children}
      </a>
    )
  }

  return (
    <header className="bg-gray-100 md:flex">
      <div className="container px-5 py-3 mx-auto md:flex md:justify-between">
        <nav className="flex items-center justify-between">
          <div>
            <a href="/" className="text-xl font-semibold text-gray-800">ALEX PARKER</a>
          </div>
          <div className="md:hidden">
            <button type="button" className="relative z-20 block text-gray-800" onClick={handleOpen}>
              <svg className="w-8 h-8 fill-current" viewBox='0 0 24 24' width='30'>
                {
                  open ?
                    <path v-if="isOpen" fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                    :
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                }
              </svg>
            </button>
            {open && <button onClick={() => setOpen(false)} className="absolute inset-0 z-10 w-full h-full bg-transparent cursor-default" ></button>}
          </div>
        </nav>
        <div className={"z-10 text-right absolute right-0 px-2 py-2 rounded shadow-xl bg-gray-100 md:flex md:shadow-none md:rounded-none md:p-0 md:static" + (open ? ' block' : ' hidden')}>
          <NavLink color="teal" href='#about'>ABOUT</NavLink>
          <NavLink color="yellow" href='#projects'>PROJECTS</NavLink>
          <NavLink color="red" href='#experience'>EXPERIENCE</NavLink>
          <NavLink color="teal" href='#contact'>CONTACT</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header