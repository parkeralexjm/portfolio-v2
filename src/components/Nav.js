import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <header className="md:flex md:justify-between md:px-5 md:py-3 md:items-center">
      <nav className="flex items-center justify-between px-5 py-3 md: p-0">
        <div>
          <a href="/">ALEX PARKER</a>
        </div>
        <div className="md:hidden">
          <button type="button" className="text-gray-800 block" onClick={handleOpen}>
            <svg className="h-8 w-8 fill-current" viewBox='0 0 24 24' width='30'>
              {
                open ?
                  <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  :
                  <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              }
            </svg>
          </button>
        </div>
      </nav>
      <div className={"px-3 pb-5 pt-2 md:flex md:p-0 text-right absolute right-0" + (open ? ' block' : ' hidden')} id="navbar">
        <a className="block px-2 py-1 hover:text-teal-700 md:ml-2" href="/">ABOUT</a>
        <a className="block px-2 py-1 hover:text-yellow-600 md:ml-2" href="/">PROJECTS</a>
        <a className="block px-2 py-1 hover:text-red-500 md:ml-2" href="/">EXPERIENCE</a>
        <a className="block px-2 py-1 hover:text-pink-600 md:ml-2" href="/">CONTACT</a>
      </div>
    </header>
  )
}

export default Header