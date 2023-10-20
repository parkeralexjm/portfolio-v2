const NavLink = ({ children, color, href }) => <a href={href} className={("hover:" + color) + " block px-4 py-2 font-semibold transition ease-in duration-200 md:ml-2"}>{children}</a>

export default NavLink