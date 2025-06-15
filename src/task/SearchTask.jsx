import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

export default function SearchTask({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <form>
            <div className="flex">
                <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                        placeholder="Search Task"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="absolute top-0 right-2 h-full rounded-e-lg text-white md:right-4"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSearch(searchTerm);
                            setSearchTerm('');
                        }}
                    >
                        <IoSearch color="gray" />
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}
