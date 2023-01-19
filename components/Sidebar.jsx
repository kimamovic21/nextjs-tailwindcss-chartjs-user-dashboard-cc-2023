import Link from 'next/link';
import React from 'react';
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {FiSettings} from 'react-icons/fi';

const Sidebar = ({children}) => {
  return (
    <div className='flex'>

        <div className='fixed w-20 h-screen p-4 bg-white border-r-[2px] flex flex-col justify-between'>

            <div className='flex flex-col items-center'>

                <Link href='/'>
                    <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                        <RxSketchLogo size={20}/>
                    </div>
                </Link>

                <span className='border-b-[2px] border-gray-200 w-full p-2'></span>

                <Link href='/'>
                    <div className='bg-gray-200 hover:bg-gray-300 text-black cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxDashboard size={20}/>
                    </div>
                </Link>

                <Link href='/customers'>
                    <div className='bg-gray-200 hover:bg-gray-300 text-black cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxPerson size={20}/>
                    </div>
                </Link>

                <Link href='/orders'>
                    <div className='bg-gray-200 hover:bg-gray-300 text-black cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <HiOutlineShoppingBag size={20}/>
                    </div>
                </Link>

                <Link href='/'>
                    <div className='bg-gray-200 hover:bg-gray-300 text-black cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <FiSettings size={20}/>
                    </div>
                </Link>

            </div>

        </div>

        <main className='ml-20 w-full'>{children}</main>

    </div>
  );
};

export default Sidebar;



// 1. dodajemo {children} kao parametar u Sidebar funkciji
// 2. dodajemo HTML elemente i stiliziramo ih
// 3. importujemo Link NEXTJS komponentu
// 4. importujemo react ikonice

