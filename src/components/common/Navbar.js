// src/components/common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCompass, FaHeart, FaEnvelope, FaUser } from 'react-icons/fa';

const Navbar = () => (
  <nav className="bg-yellow-500 text-black fixed w-full bottom-0 md:relative md:bottom-auto md:top-0 z-10">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center md:justify-center">
      <div className="md:flex hidden">
        <Link to="/explore" className="mx-4 text-white hover:text-black">Explore</Link>
        <Link to="/wishlist" className="mx-4 text-white hover:text-black">Wishlist</Link>
        <Link to="/messages" className="mx-4 text-white hover:text-black">Messages</Link>
        <Link to="/profile" className="mx-4 text-white hover:text-black">Profile</Link>
      </div>
      <div className="flex justify-between w-full md:hidden">
        <Link to="/explore" className="flex flex-col items-center mx-2 text-white hover:text-black">
          <FaCompass size={24} />
          <span className="text-xs">Explore</span>
        </Link>
        <Link to="/wishlist" className="flex flex-col items-center mx-2 text-white hover:text-black">
          <FaHeart size={24} />
          <span className="text-xs">Wishlist</span>
        </Link>
        <Link to="/messages" className="flex flex-col items-center mx-2 text-white hover:text-black">
          <FaEnvelope size={24} />
          <span className="text-xs">Messages</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center mx-2 text-white hover:text-black">
          <FaUser size={24} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
