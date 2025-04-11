import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Companies', 'Models', 'Dealerships', 'Contact Us', 'Log in'];

  return (
    <div className='z-30 px-6 sm:px-10 pt-4'>
      <div className='text-white flex items-center justify-between'>
        <h1 className='text-3xl sm:text-4xl font-inter tracking-tighter font-bold'>OXICARS</h1>

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-8 items-center'>
          {navItems.map((val, ind) => (
            <a
              key={ind}
              href='#'
              className={`${
                ind === 4
                  ? 'bg-white hover:bg-black hover:text-white text-black text-sm px-4 py-1 rounded-full'
                  : 'text-lg'
              } font-inter hover:text-zinc-400 transition-all duration-300 tracking-tighter`}
            >
              {val}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className='md:hidden mt-4 flex flex-col gap-4 text-white'>
          {navItems.map((val, ind) => (
            <a
              key={ind}
              href='#'
              className={`${
                ind === 4
                  ? 'bg-white hover:bg-black hover:text-white text-black text-sm px-4 py-1 rounded-full w-fit'
                  : 'text-lg'
              } font-inter hover:text-zinc-400 transition-all duration-300 tracking-tighter`}
            >
              {val}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
