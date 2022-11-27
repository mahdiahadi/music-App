import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
      const navigate=useNavigate();
      const [searchTerm,setSearchTerm]=useState('')

      const handlesubmit =(e)=>{
        e.preventDefault();

        navigate(`/search/${searchTerm}`)
      }
  return(
    <form onSubmit={handlesubmit}  autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
          Search all files
      </label>
      <div className='flex flex-row justify-start items-center'>
        <FiSearch aria-hidden={true} className="w-5 h-5 ml-4" />
        <input
          onChange={(e)=>setSearchTerm(e.target.value)}
          value={searchTerm}
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
        />
      </div>

    </form>
  )
};

export default Searchbar;
