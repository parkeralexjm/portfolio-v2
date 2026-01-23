import { useEffect, useState, useRef, useCallback } from "react";
import { colorVariants } from "./utilities/helper";
import { Link } from "react-scroll";
import useColorMode from "./utilities/useColorMode";

function Header() {
  const [open, setOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode("light");
  const switchToggleRef = useRef(null);
  const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;

  const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
    switchTheme();
  };

  const switchTheme = useCallback(() => {
    const switchToggle = switchToggleRef.current;
    if (!switchToggle) return;
    const isDarkmode = document.body.classList.contains("dark");
    if (isDarkmode) {
      switchToggle.classList.remove("bg-yellow-400", "-translate-x-2");
      switchToggle.classList.add("bg-gray-700", "translate-x-full");
      setTimeout(() => {
        switchToggle.innerHTML = darkIcon;
      }, 250);
    } else {
      switchToggle.classList.add("bg-yellow-400", "-translate-x-2");
      switchToggle.classList.remove("bg-gray-700", "translate-x-full");
      setTimeout(() => {
        switchToggle.innerHTML = lightIcon;
      }, 250);
    }
  }, [darkIcon, lightIcon]);

  useEffect(() => {
    switchTheme();
    // run on mount and when colorMode changes
  }, [colorMode, switchTheme]);

  return (
    <header className="fixed top-0 w-full transition-colors duration-300 z-40 bg-gray-100 md:flex dark:bg-gray-800 shadow-lg">
      <div className="container px-5 py-3 mx-auto md:flex md:justify-between">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="flex items-center w-10 h-5 ml-1 mr-5 transition duration-300 bg-gray-100 rounded-full shadow dark:bg-gray-200 focus:outline-none"
              onClick={handleClick}
            >
              <div
                id="switch-toggle"
                ref={switchToggleRef}
                className="w-6 h-6 relative rounded-full transition duration-500 transform bg-yellow-400 -translate-x-2 p-1 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </button>
            <a
              href="/"
              className="mr-4 text-xl font-semibold dark:text-gray-200"
            >
              ALEX PARKER
            </a>
          </div>
          <div className="flex items-center">
            <div>
              <button
                type="button"
                className="relative z-20 block text-gray-800 dark:text-gray-200 md:hidden"
                onClick={handleOpen}
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  width="30"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
              {open && (
                <button
                  onClick={() => setOpen(false)}
                  className="absolute inset-0 z-10 w-full h-full bg-transparent cursor-default"
                ></button>
              )}
            </div>
          </div>
        </nav>
        <div
          className={
            "transition-colors duration-300 z-10 text-right absolute right-0 px-2 py-2 rounded shadow-xl bg-gray-100 dark:bg-gray-800 md:flex md:shadow-none md:rounded-none md:p-0 md:static" +
            (open ? " block" : " hidden")
          }
        >
          <NavLink color="teal" href="about" setOpen={setOpen}>
            ABOUT
          </NavLink>
          <NavLink color="red" href="experience" setOpen={setOpen}>
            EXPERIENCE
          </NavLink>
          <NavLink color="yellow" href="projects" setOpen={setOpen}>
            PROJECTS
          </NavLink>
          <NavLink color="teal" href="contact" setOpen={setOpen}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </header>
  );
}

const NavLink = ({ children, color, href, setOpen }) => {
  const linkLayoutClasses =
    "block text-lg z-20 mx-2 px-2 py-2 transition ease-in-out duration-200 group transition-all dark:text-gray-200";
  const finalLinkClasses = `${linkLayoutClasses} ${colorVariants.hover[color]}`;
  return (
    <Link
      to={href}
      smooth={true}
      spy={true}
      offset={-50}
      duration={500}
      className={`${finalLinkClasses} relative ${colorVariants.transition[color]} after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
      // close the mobile menu only when the scroll completes to avoid cancelling the scroll animation
      onSetActive={() => {
        if (typeof setOpen === "function") setOpen(false);
      }}
    >
      {children}
    </Link>
  );
};

export default Header;
