import React from 'react';

const CarCar = ({ imgSrc, name, desc, price, type, brand, isWishlisted, onWishlistClick }) => {
  return (
    <div className='w-full max-w-[20rem] rounded-xl p-3 bg-white shadow-md transition-all duration-300 hover:shadow-lg'>
      <img
        src={imgSrc}
        className='w-full h-40 sm:h-44 md:h-48 lg:h-52 rounded-lg object-cover'
        alt={name}
      />
      <div className='text-black mt-3 font-inter'>
        <p className='text-lg md:text-xl tracking-tighter font-semibold'>
          {name} <span className='font-light'>| {brand}</span>
        </p>
        <p className='text-xs md:text-sm text-black/60 tracking-tighter font-medium line-clamp-2'>{desc}</p>
        <p className='text-sm md:text-base text-black tracking-tighter font-semibold mt-1'>{type}</p>
        <div className='mt-4'>
          <button
            onClick={onWishlistClick}
            className={`border-2 rounded-lg tracking-tighter text-sm px-3 py-1 transition-all
              ${isWishlisted ? 'bg-red-500 text-white border-red-500' : 'text-red-500 border-red-500 hover:bg-red-100'}`}
          >
            {isWishlisted ? 'Wishlisted' : 'Add to wishlist'}
          </button>
          <div className='flex justify-between mt-3 items-center'>
            <p className='text-lg md:text-xl font-bold tracking-tighter'>${price}</p>
            <p className='text-xs md:text-sm font-semibold text-black/50 tracking-tighter cursor-pointer hover:underline'>
              More details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCar;
