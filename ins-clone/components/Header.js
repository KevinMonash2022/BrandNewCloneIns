import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { modalState } from '@/atom/modalAtom';


export default function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);

    // console.log(session);
    return (
        <div className="shadow-sm border-b sticky top-0 bg-white z-30">
            <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
                {/* Left */}

                {/* instagram display on large screen and hidden on the small screen */}
                <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                    <Link href="/">
                        <Image
                            src="https://jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
                            layout="fill"
                            className='object-contain'
                        />
                    </Link>

                </div>

                {/* icon display on small screen and hidden on the large screen */}
                <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                    <Link href="/">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
                            layout="fill"
                            className='object-contain'
                        />
                    </Link>


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
                    <Link href="/">
                        <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                    </Link>

                    {session ? (
                        <>
                            <PlusCircleIcon onClick={() => setOpen(true)} className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />

                            <img onClick={signOut} className='h-12 userImage' src={session?.user.image} alt={session.user.name} />
                        </>
                    ) : (
                        <button onClick={signIn}>Sign in</button>
                    )}

                </div>

            </div>
        </div>

    )
}
