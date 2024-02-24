import { username } from 'minifaker'
import React from 'react'

export default function MiniProfiles() {
    return (
        <div className='flex items-center justify-between mt-14 ml-8'>
            <img className='h-16 userImage' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5847f24a-889d-4f1d-971c-da2bafcfc71c/dfwrftm-18a738cf-4099-43e3-8914-7a49de0d2e3c.png/v1/fill/w_880,h_900/anya_forger_render_by_ben10andtheppgdude_dfwrftm-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNTg0N2YyNGEtODg5ZC00ZjFkLTk3MWMtZGEyYmFmY2ZjNzFjXC9kZndyZnRtLTE4YTczOGNmLTQwOTktNDNlMy04OTE0LTdhNDlkZTBkMmUzYy5wbmciLCJ3aWR0aCI6Ijw9ODgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZWjovZ-_L9QuWjHlttg3a1DNw4LGZgWgAQL6x9004Ts" alt="userImage" />

            <div className="flex-1 mr-3">
                <h2 className='font-bold'>codewith Kaixin Zhang</h2>
                <h3 className='text-sm text-gray-500'>Welcome to my instagram clone.</h3>
            </div>

            <button className='font-semibold text-red-300 hover:scale-125 transition-transform duration-200 ease-out'>Sign out</button>
        </div>
    )
}
