import React from 'react'
import BrandCard from './BrandCard'

const BrandCat = () => {
  const brands = [
    {
      name: "Toyota",
      imgSrc: "https://pngimg.com/d/car_logo_PNG1665.png"
    },
    {
      name: "Audi",
      imgSrc: "https://pngimg.com/d/car_logo_PNG1640.png"
    },
    {
      name: "Mercedes",
      imgSrc: "https://pngimg.com/uploads/mercedes_logos/small/mercedes_logos_PNG18.png"
    },
    {
      name: "BMW",
      imgSrc: "https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19707.png"
    },
    {
      name: "Kia",
      imgSrc: "https://pngimg.com/d/kia_PNG3.png"
    },
    {
      name: "Suzuki",
      imgSrc: "https://pngimg.com/d/suzuki_PNG12291.png"
    },
    {
      name: "Cheverlote",
      imgSrc: "https://pngimg.com/uploads/chevrolet/%D1%81hevrolet_PNG157.png"
    },
    {
      name: "Jaguar",
      imgSrc: "https://static.vecteezy.com/system/resources/previews/001/199/293/non_2x/jaguar-logo-png.png"
    }
  ]

  return (
    <div className='w-full rounded-t-[3rem] py-16 px-6 sm:px-10 bg-white'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10'>
        <p className='text-3xl sm:text-4xl font-inter text-black font-semibold tracking-tighter mb-4 sm:mb-0'>
          Explore our brands
        </p>
        <p className='text-lg sm:text-xl font-inter text-black font-semibold tracking-tighter cursor-pointer'>
          More →
        </p>
      </div>

      <div className='flex flex-wrap gap-6 justify-center sm:justify-start'>
        {brands.map((val, ind) => (
          <BrandCard key={ind} name={val.name} imgSrc={val.imgSrc} />
        ))}
      </div>
    </div>
  )
}

export default BrandCat
