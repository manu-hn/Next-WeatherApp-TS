"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { MdMyLocation } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

type Props = {}

export default function NavBar({ }: Props) {
    const [searchText, setSearchText] = useState('');
    console.log(searchText);
    return (
        <nav className='shadow-md sticky top-0 left-0 z-10 bg-white'>
            <div className='w-full h-20 flex justify-between items-center max-w-7xl px-3 mx-auto'>
                <header className="py-4  w-full">
                    <div className="container flex w-full flex-col justify-between gap-1.5 px-4 md:gap-3 md:flex-row md:px-6 lg:gap-6">
                        <div className="flex flex-row items-center">
                            <LightModeOutlinedIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                            <div className="ml-3 text-2xl font-semibold">Weather</div>
                        </div>
                        <div className="w-full flex items-center max-w-sm order-last mt-2 md:mt-0 md:ml-auto lg:max-w-md">
                            <MdMyLocation className='w-8 h-8 text-gray-500 dark:text-gray-400 mx-2' />
                            <MdOutlineLocationOn  className='w-8 mx-2 h-8 text-black dark:text-white'  />
                            <p className='text-black mx-3 text-sm md:text-md '>India</p>
                            <Input onChange={(e) => setSearchText(e.target.value)} 
                            placeholder="Search city" type="search" className='focus:outline-none' />
                            <button ><IoIosSearch className='w-10 rounded-tr-md rounded-br-md 
                            py-2 -ml-10 h-10 text-black 
                            dark:text-white bg-blue-500 opacity-90 hover:opacity-100 ' /></button>
                        </div>
                    </div>

                </header>
            </div>
        </nav>
    )
}


