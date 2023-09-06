
'use client';
import './globals.css'
import type { Metadata } from 'next'
import NavBar from './navBar'



export const metadata: Metadata = {
  title: 'Meli front',
  description: 'Generated by create next app - Meli front',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-stone-200'>
        <header className='h-16 bg-yellow-300 px-4 flex'>
          <form action='/items' className='m-auto gap-4 flex max-w-screen-xl flex-1 relative'>
            <input className='h-8 flex-1 ' type='text' name='search'/>
            <button className="absolute inset-y-0 right-1 flex items-center pl-3 "  type='submit'>
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </button>
          </form>
          
        </header>
        <NavBar/>
        <main className='max-w-screen-xl p-4 w-100'>{children}</main>
      </body>
    </html>
  )
}
