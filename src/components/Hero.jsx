import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import BrandCat from './BrandCat';
import ExploreAll from './ExploreAll';
import ThemeToggle from './ThemeToggle';

const Hero = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleQuery = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/search?car=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className='w-full h-[80vh] relative dark:bg-gray-900'>
      {/* <ThemeToggle /> */}
      <div className='absolute z-[-1] w-full h-full top-0 left-0'>
        <img
          src='https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg'
          className='w-full opacity-90 h-full object-cover'
          alt='hero-bg'
        />
        <div className='bg-black/80 dark:bg-black/70 absolute top-0 left-0 w-full h-full'></div>
      </div>

      <Nav />

      <div className='text-white flex flex-col justify-center items-center h-[60vh] w-full px-4 font-inter text-center'>
        <p className='text-sm sm:text-base tracking-tighter text-white/80 dark:text-white/70'>
          Here you can find every car at reasonable price.
        </p>
        <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 font-bold tracking-tighter mb-8'>
          Find Your Perfect Car
        </h1>

        <form
          onSubmit={handleQuery}
          className='flex flex-col sm:flex-row gap-4 sm:gap-3 w-full max-w-2xl justify-center items-center'
        >
          <input
            type='text'
            placeholder='Search your dream car'
            onChange={(e) => setQuery(e.target.value)}
            className='w-full sm:flex-1 placeholder:text-black/40 dark:placeholder:text-white/50 pl-5 pr-10 py-3 text-md rounded-full outline-none text-black dark:text-white bg-white dark:bg-gray-800 transition-colors'
          />
          <input
            type='submit'
            value='Search'
            className='text-md px-6 font-semibold hover:bg-blue-700 cursor-pointer transition-all rounded-full py-3 tracking-tighter bg-blue-600 text-white dark:hover:bg-blue-500'
          />
        </form>
      </div>

      <div className='relative -top-[5rem]'>
        <BrandCat />
        <div>
          <ExploreAll />
        </div>
      </div>
    </div>
  );
};

export default Hero;
