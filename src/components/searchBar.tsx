'use client';
import { useState } from 'react';
import Image from "next/image";

export default function SearchBar({
  setSearchQuery,
}: {
  setSearchQuery: (query: string) => void;
}) {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(input);
  };

  return (
    <div className="lg:max-w-screen-lg max-w-[90%] mx-auto w-full">
      <div className="flex bg-white w-max h-max py-2 md:px-3 px-2 rounded-lg items-center border-[--secondary] border-[1px]">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Procure por um Pokémon"
          className="placeholder:text-sm focus:outline-none placeholder:text-[--secondary] text-[--secondary]"
        />
        <button onClick={handleSearch} className="ml-2">
          <Image
            className='md:w-8 w-5 h-auto'
            alt="Search Icon"
            src="/search.svg"
            width={30}
            height={30}
            quality={100}
          />
        </button>
      </div>
    </div>
  );
}
