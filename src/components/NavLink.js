const NavLink = ({ children, color, href }) => <a className={"block px-4 py-2 font-semibold transition ease-in duration-200 hover:text-yellow-400"} href={href}>{children}</a>

export default NavLink