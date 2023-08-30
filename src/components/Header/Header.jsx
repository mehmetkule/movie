import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLightMode ,MdDarkMode} from "react-icons/md";
 
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  };

  const mobileMenu = () => {
    return (
      <div className="fixed w-full h-full  bg-black md:hidden mt-128 z-50 flex items-center justify-center">
        <div className="  bg-black w-11/12 h-4/5  overflow-hidden">
          <div className="flex flex-col text-xl   justify-left items-center space-y-4">
            <a href="#" className="hover:text-gega-red transition duration-100">
              Home
            </a>
            <a href="#" className="hover:text-gega-red transition duration-100">
              CELEBRITIES
            </a>
            <a href="#" className="hover:text-gega-red transition duration-100">
              NEWS
            </a>
            <a href="#" className="hover:text-gega-red transition duration-100">
              ABOUT
            </a>
            <a href="#" className="hover:text-gega-red transition duration-100">
              Contact
            </a>
            <div className="flex items-center">
            <div className="space-x-4">
            {/*   <form>
                <div className="group border-r items-center flex  px-2 mx-4 py-1 border-gega-red">
                  <input
  
                    type="text" 
                    className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500"
                  />
                  <button className="-ml-4 group-hover:ml-0 transition duration-500">
                    <AiOutlineSearch className="group-hover:text-gega-red transition duration-500 "/>
                  </button>
                </div>
              </form> */}
              <div className="flex flex-col  items-center space-x-4">
              <a href="#" className="hover:text-gega-red py-2 transition duration-100">
                Login
              </a>
              <a
                href="#"
                className="bg-gega-red text-white py-1 px-8 whitespace-nowrap  hover:bg-white hover:text-gega-red transition duration-300"
              >
                Sign Up
              </a>
              </div>
  
            </div>
            </div>
          
          </div>
        </div>
      </div>
    );
  };
  return (
    <header className="dark:bg-black bg-white text-black py-6 lg:py-12   dark:text-gega-grey uppercase">
      
      <div className="container flex justify-between items-center space-x-8 lg:space-x-16">
        <a href="#" className="text-4xl lg:text-6xl font-bold text-gega-grey text-transparent bg-gradient-to-r bg-clip-text from-gega-red to bg-gega-grey">
          GEGA
        </a>
        <div className="block md:hidden">
          <button onClick={()=>setIsOpen(!isOpen)} className="flex items-center px-3 py-2    text-gega-grey border-gega-grey hover:text-gega-red hover:border-gega-red transition duration-100">
            <RxHamburgerMenu  className="text-2xl" />
          </button>
        
        </div>
       
        <nav className="hidden md:flex justify-between flex-1">
          <div className="flex items-center lg:text-lg space-x-4 lg:space-x-8">
            <a href="#" className="hover:text-gega-red transition duration-500">
              Home
            </a>
            <a href="#" className="hover:text-gega-red transition duration-500">
              Celebrities
            </a>
            <a href="#" className="hover:text-gega-red transition duration-500">
              Blog
            </a>
            <a href="#" className="hover:text-gega-red transition duration-500">
              News
            </a>
            <a href="#" className="hover:text-gega-red transition duration-500">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8">
            <form>
              <div className="group border-r items-center flex  px-2 mx-4 py-1 border-gega-red">
                <input
                  type="text"
                  className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500"
                />
                <button className="-ml-4 group-hover:ml-0 transition duration-500">
                  <AiOutlineSearch className="group-hover:text-gega-red transition duration-500 "/>
                </button>
              </div>
            </form>
            <div className="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
            <a href="#" className="hover:text-gega-red transition duration-100">
              Login
            </a>
            <a
              href="#"
              className="dark:bg-gega-red dark:text-white py-1 px-3 whitespace-nowrap border border-gega-red  text-gega-red hover:bg-gega-red hover:text-gega-grey  dark:hover:bg-white dark:hover:text-gega-red transition duration-500"
            >
              Sign Up
            </a>
            <button onClick={toggleDarkMode} className="text-gega-grey hover:text-gega-red transition duration-500"> {isDark ? < MdDarkMode className="text-2xl text-black" /> : <MdLightMode className="text-2xl" />}</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
