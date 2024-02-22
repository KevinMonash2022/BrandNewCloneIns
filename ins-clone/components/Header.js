import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
        {/* left */}

        
        <div className="flex items-center justify-between max-w-6xl">
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

            <h1>Right sides</h1>

        </div>

        
             
        

        {/* Middle */}

        {/* Right */}

    </div>
  )
}
