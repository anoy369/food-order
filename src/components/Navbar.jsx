import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [delivery, setDelivery] = useState(true)

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left-side */}
      <div className="flex items-center">
        <div onClick={()=> setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Quality <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p onClick={()=> setDelivery(!delivery)} className={delivery == true ? 'bg-black text-white rounded-full p-2 duration-300 cursor-pointer' : 'p-2 duration-300 cursor-pointer'}>Delivery</p>
          <p onClick={()=> setDelivery(!delivery)} className={delivery == true ? 'p-2 duration-300 cursor-pointer' : 'bg-black text-white rounded-full p-2 duration-300 cursor-pointer'}>Pickup</p>
        </div>
      </div>

      {/* search bar */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent pp-2 focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/* cart button  */}
      <div>
        <button className="rounded-full bg-black text-white hidden md:flex items-center py-2">
          <BsFillCartFill size={20} /> Cart
        </button>
      </div>

      {/* mobile menu  */}
      {/* overlay */}
      {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}

      {/* side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <div className="flex items-center justify-between">
          <AiOutlineClose 
            onClick={()=> setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            Quality <span className="font-bold">Eats</span>
          </h2>
        </div>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;