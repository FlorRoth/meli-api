import React, { useEffect, useState } from 'react';
import './globals.css';
import api from './api';

interface Category {
  id: string;
  name: string;
}


export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [results, setResults] = useState<Category[]>([]);; 

  useEffect(() => {

    async function fetchCategories() {
      try {
        const categories : any = await api.categories.all();
        setResults(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-yellow-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-yellow-300">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-gray-500 font-thin" aria-current="page">
                Inicio
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-500 font-thin "
                aria-expanded={isDropdownOpen}
              >
                Categorias
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`absolute z-10 ${isDropdownOpen ? 'block' : 'hidden'} font-normal overflow-auto dropdown-category bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/categories" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Todos
                    </a>
                  </li>
                  {results && results.map((category: { id: string; name: string }) => (
                    <li>
                      <a href={`/categories/${category.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {category.name}
                      </a>
                    </li>

                   ))}
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-500 font-thin">
                Productos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
