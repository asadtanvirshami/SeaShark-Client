  import React, { useState } from "react";

  type Props = {};

  const Header = (props: Props) => {
    const [show, setshow] = useState<Boolean>(false);
    return (
      <>
        <div className="shadow-md">

          <nav className="2xl: 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4 ">
            {/* For large and Medium-sized Screen container */}
            <div
              id="bgIcon"
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:hidden cursor-pointer grid grid-cols-2`}
            >
              <div className="sm: text-left">
                <h1>SharkBite</h1>
              </div>
              <div className="sm: flex justify-end">
              <svg
              onClick={() => setshow(!show)}
                className={`${show ? "hidden" : ""}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" transform duration-150"
                  d="M4 6H20"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className=" transform duration-150"
                  d="M4 18H20"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
              onClick={() => setshow(!show)}
                className={`${show ? "block" : "hidden"}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </div>
         
           
              
            </div>
            <div className="flex justify-between ">
              <div className="hidden sm:flex flex-row items-center space-x-6">
                <ul className="flex inline-block">
                  <li
                    className="relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px] 
                before:bottom-0 before:left-0 before:bg-blue-500 
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300  mr-3 font-semibold cursor-pointer hover:text-blue-500 "
                  >
                    Home
                  </li>
                  <li
                    className="relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px]
                before:bottom-0 before:left-0 before:bg-blue-500 
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300  mr-3 font-semibold cursor-pointer hover:text-blue-500 "
                  >
                    Explore
                  </li>
                  <li
                    className="relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px]
                before:bottom-0 before:left-0 before:bg-blue-500 
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300  mr-3 font-semibold cursor-pointer hover:text-blue-500 "
                  >
                    Services
                  </li>
                  <li
                    className="relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px]
                before:bottom-0 before:left-0 before:bg-blue-500 
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300  mr-3 font-semibold cursor-pointer hover:text-blue-500 "
                  >
                    Pricing
                  </li>
                </ul>
              </div>
              <div className="hidden sm:flex flex-row items-center space-x-6">
              <h1 className=" text-2xl  text-blue-700 font-bold">Shark Bite</h1>
              </div>
              <div className="hidden sm:flex flex-row items-center space-x-6">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded transition-all duration-300 ease-in-out">
                  Become a SharkBite!
                </button>
              </div>
            </div>
            {/* Mobile and small-screen devices (toggle Menu) */}
            <div
              id="MobileNavigation"
              className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
            >
        <ul className="">
                <li className=" mr-3 mt-3 font-semibold cursor-pointer hover:text-blue-500 ">
                  Home
                </li>
                <li className=" mr-3 mt-3 font-semibold cursor-pointer hover:text-blue-500 ">
                  Explore
                </li>
                <li className=" mr-3 mt-3 font-semibold cursor-pointer hover:text-blue-500 ">
                  Services
                </li>
                <li className=" mr-3 mt-3 font-semibold cursor-pointer hover:text-blue-500 ">
                  Pricing
                </li>
              </ul>
              <div className="sm:flex flex-row text-center space-x-6">
              <button className="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded transition-all duration-300 ease-in-out">
                  Become a SharkBite!
                </button>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  };

  export default Header;
