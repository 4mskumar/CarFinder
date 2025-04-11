import React, { useState } from 'react'
import CarCar from './CarCar';
import { searchData } from '../../public/searchData';

const LowToHigh = () => {

    const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 10;

      const sortedCars = searchData.slice().sort((a,b) => a.price - b.price)
    
      const indexOfLast = currentPage * itemsPerPage;
      const indexOfFirst = indexOfLast - itemsPerPage;
      const currentCars = searchData.slice(indexOfFirst, indexOfLast);
      const totalPages = Math.ceil(searchData.length / itemsPerPage);
    
      const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
      };
    
      const prevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
      };

  return (
    <div className='py-20 px-4 sm:px-6 md:px-10'>
      <h1 className='font-inter tracking-tighter text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left'>
        Explore All Vehicles
      </h1>

      <div className='mt-10 flex flex-wrap justify-center gap-6'>
        {
          sortedCars.map((val) => (
            <CarCar
              key={val.id}
              imgSrc={val.image}
              name={val.name}
              desc={val.description}
              price={val.price}
              type={val.fuel}
              brand={val.brand}
            />
          ))
        }
      </div>

      <div className='mt-10 flex justify-center gap-4'>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50'
        >
          Previous
        </button>
        <span className='text-lg font-medium'>{currentPage} / {totalPages}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default LowToHigh