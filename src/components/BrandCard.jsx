import React from 'react'

const BrandCard = ({ name, imgSrc }) => {
  return (
    <div className='w-[7rem] sm:w-[8rem] md:w-[10rem] h-[10rem] md:h-[12rem] flex flex-col items-center justify-start'>
      <div className='w-full h-[5rem] sm:h-[6rem] md:h-[7rem] p-2 sm:p-3 flex items-center justify-center'>
        <img
          src={imgSrc}
          className='w-full h-full object-contain'
          alt={name}
        />
      </div>
      <p className='font-inter tracking-tighter mt-2 sm:mt-3 font-semibold text-sm sm:text-base md:text-xl text-black text-center'>
        {name}
      </p>
    </div>
  )
}

export default BrandCard
