import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { searchData } from "../../public/searchData";
import CarCar from "./CarCar";

const SearchResults = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery().get("car") || "";

  const [search, setSearch] = useState('')
    const navigate = useNavigate()
  
    const handleQuery = (e) => {
      e.preventDefault()
      if(search.trim() !== ''){
        navigate(`/search?car=${encodeURIComponent(search)}`)
      }
    }

  const filteredCars = searchData.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <Link to={'/'}>
        <h1 className="text-sm mb-5 text-blue-600 font-inter tracking-tighter">Back</h1>
      </Link>
      <form
        onSubmit={handleQuery}
        className="flex flex-col sm:flex-row gap-4 sm:gap-3 w-full max-w-2xl justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search your dream car"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-200 sm:flex-1 placeholder:text-black/40 pl-5 pr-10 py-3 text-md rounded-full outline-none text-black"
        />
        <input
          type="submit"
          value="Search"
          className="text-md px-6 font-semibold hover:bg-blue-700 cursor-pointer transition-all rounded-full py-3 tracking-tighter bg-blue-600 text-white"
        />
      </form>

      <h2 className="text-3xl mt-10 font-bold mb-6">
        Search Results for: <span className="text-blue-600">{query}</span>
      </h2>
      <div className="flex flex-wrap gap-10">
        {filteredCars.map((val, ind) => (
          <CarCar
            imgSrc={val.image}
            name={val.name}
            desc={val.description}
            price={val.price}
            type={val.fuel}
            brand={val.brand}
            isWishlisted={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
