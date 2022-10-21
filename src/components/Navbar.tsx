import React from "react";

import {HomeIcon, Bars3Icon, UserIcon, DocumentIcon} from "@heroicons/react/20/solid";
type Props = {};

export default function Navbar({}: Props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="box">
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              Manfred Developer
            </p>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Bars3Icon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item mt-1">
                <a
                    className="rounded-md px-3 py-2 flex items-center font-poppins  bg-white text-gray-lite font-medium mx-2.5 leading-snug hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]   transition-all duration-300 ease-in-out"
                    href="/"
                >
                  <HomeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 hover:text-white"
                            aria-hidden="true"/>
                  <span className="ml-2">Home</span>
                </a>

              </li>
              <li className="nav-item mt-1">
                <a
                    className="rounded-md px-3 py-2 flex items-center font-poppins  bg-white text-gray-lite font-medium mx-2.5 leading-snug hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]   transition-all duration-300 ease-in-out"
                    href={'/about'}
                >
                  <UserIcon className="mr-1.5 h-5 w-5 flex-shrink-0 hover:text-white"
                            aria-hidden="true"/>
                  <span className="ml-2">
                    About</span>
                </a>
              </li>
              <li className="nav-item mt-1">
                <a
                    className="rounded-md px-3 py-2 flex items-center font-poppins  bg-white text-gray-lite font-medium mx-2.5 leading-snug hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]   transition-all duration-300 ease-in-out"
                    href={'/resume'}
                >
                  <DocumentIcon className="mr-1.5 h-5 w-5 flex-shrink-0 hover:text-white"
                                aria-hidden="true"/>
                  <span className="ml-2">Resume</span>
                </a>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
