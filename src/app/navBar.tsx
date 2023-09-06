import React, { useEffect, useState } from 'react';

import './globals.css';
import api from './api';
import { usePathname } from 'next/navigation'


interface Category {
  id: string;
  name: string;
}


export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavBarMobileOpen, setIsNavBarMobileOpen] = useState(false);
  const [results, setResults] = useState<Category[]>([]);

  const pathname = usePathname()
  const isSelectedCategories = pathname.includes('/categories');
  const isSelectedProducts = pathname.includes('/items');

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
  const navBarMobile = () => {
    setIsNavBarMobileOpen(!isNavBarMobileOpen);
    console.log(isNavBarMobileOpen);
  };

  return (
    <nav className="bg-yellow-300">
      <div className='w-100 flex justify-end'>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden mb-1" aria-controls="navbar-dropdown" onClick={navBarMobile} aria-expanded={isNavBarMobileOpen}>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0 md:p-2">
        <div className={` ${isNavBarMobileOpen ? 'block' : 'hidden'} w-full md:block md:w-auto" id="navbar-dropdown`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 md:mt-4  md:flex-row md:space-x-8  md:border-0 bg-yellow-300">
            <li>
              <a href="/" className={`${pathname === '/' ? 'bg-white  rounded' :  'bg-yellow-300'} block py-2 pl-3 pr-4 text-gray-500 font-thin`} aria-current="page">
                Inicio
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className={` ${isSelectedCategories ? 'bg-white  rounded' :  'bg-yellow-300'} flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-500 font-thin `}
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
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
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
              <a href="/items" className= {`${isSelectedProducts ? 'bg-white  rounded' :  'bg-yellow-300'} block py-2 pl-3 pr-4 text-gray-500 font-thin`}>
                Productos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
