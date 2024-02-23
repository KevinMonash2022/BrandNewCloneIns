import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'


export default function Header() {
    return (
        <div className="shadow-sm border-b sticky top-0 bg-white z-30">
            <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
                {/* Left */}

                {/* instagram display on large screen and hidden on the small screen */}
                <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                    <Image
                        src="https://jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
                        layout="fill"
                        className='object-contain'
                    />

                </div>

                {/* icon display on small screen and hidden on the large screen */}
                <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
                        layout="fill"
                        className='object-contain'
                    />

                </div>

                {/* Middle */}
                <div className="relative mt-1">
                    <div className="absolute top-2 left-2">
                        <MagnifyingGlassIcon className='h-5 text-gray-500' />
                    </div>
                    <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
                </div>

                {/* Right */}
                <div className="flex space-x-4 items-center">
                    <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                    <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                    <img src='https://storage.googleapis.com/sticker-prod/J0kvw34krCDQNNHoZjEt/cover-1.webp' alt='user-image' className='h-10 rounded-full cursor-pointer' />
                </div>

            </div>
        </div>

    )
}
