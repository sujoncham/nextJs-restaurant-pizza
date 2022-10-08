import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-orange-500 py-5 flex justify-between items-center">
      <div>
        <span>+01744709489</span>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-5">
          <li>Home</li>
          <li>Products</li>
          <li>Menu</li>
          <Image src="" alt="" />
          <li>Events</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Navbar;
