'use client';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Search from "@/api/Search";
import { useState, useEffect } from "react";

const InputUI = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('query')?.toString() || '');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>(searchParams.get('query')?.toString() || '');

  
  const handleSearch = useDebouncedCallback((term: string) => {
    setDebouncedSearchTerm(term);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

 
  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleSearch(searchTerm);
    }
  };

  return (
    <div className="flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-2 pl-10 pr-4 outline-none placeholder:text-gray-400"
          placeholder="Поиск..."
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 focus:text-gray-400 hover:text-gray-600"
        >
 <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.21-5.56a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
          </svg> 
        </button>
        <div className="absolute left-0 right-0 mt-1 bg-white shadow-lg border-b-xl max-h-60 overflow-auto">
          
          <Search term={debouncedSearchTerm} />
        </div>
      </div>
    </div>
  );
};

export default InputUI;
