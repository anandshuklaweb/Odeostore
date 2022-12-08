import React from "react";
import Link from "next/link";

const Navbar = ({ cart }) => {
  return (
    <>
      <div className="flex justify-center h-[60px] z-30">
        <nav className="  z-80self-center fixed  w-full  shadow bg-white">
          <div className="flex justify-between items-center p-2 text-black">
            <Link href={"/"}>
              <img
                src="/Odeostore-logo-teal.png"
                alt=""
                className="pl-5 md:w-[210px] lg:w-[210px] w-[150px]"
              />
            </Link>
            <ul className="hidden md:flex items-center text-[18px] font-semibold pl-32">
              <li className="py-2 rounded-lg px-5">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="py-2 rounded-lg px-5">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="py-2 rounded-lg px-5">
                <Link href={"/products"}>Products</Link>
              </li>
              <li className="py-2 rounded-lg px-5">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
            <div className="text-teal-600 text-center text-base pr-5 hidden lg:inline-flex">
              <Link href={"/cart"}>
                <button className=" hover:bg-teal-600 mr-2 hover:text-white  border-teal-600 border-2 rounded-sm py-1 px-6">
                  Cart({cart.length})
                </button>
              </Link>
              <Link href={"/login"}>
                <button className=" hover:bg-teal-600 hover:text-white  border-teal-600 border-2 rounded-sm py-1 px-6">
                  Login
                </button>
              </Link>
            </div>
            <button className="block p-3 mx-10 md:hidden hover:bg-gray-300 rounded-xl group">
              <div className="w-5 my-[3px] h-[3px] bg-black mb-[2px]"></div>
              <div className="w-5 my-[3px] h-[3px] bg-black mb-[2px]"></div>
              <div className="w-5 my-[3px] h-[3px] bg-black"></div>
              <div className="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-gray-100 group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                <ul className="flex flex-col items-center text-[18px] pt-[60px]">
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <Link href={"/about"}>About</Link>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <Link href={"/products"}>Products</Link>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <Link href={"/login"}>Login</Link>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </nav>
      </div>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </>
  );
};

export default Navbar;
