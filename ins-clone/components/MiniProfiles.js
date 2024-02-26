import { useSession, signOut } from "next-auth/react";

export default function MiniProfiles() {
    const { data: session } = useSession();

    return (
        <div className='flex items-center justify-between mt-14 ml-8'>
            <img
                className='h-16 userImage'
                src={session?.user.image}
                alt={session?.user.name}
            />

            <div className="flex-1 mr-3">
                <h2 className='font-bold'>{session?.user.name}</h2>
                <h3 className='text-sm text-gray-500'>Welcome to my instagram clone.</h3>
            </div>

            <button onClick={signOut} className='font-semibold text-red-300 hover:scale-125 transition-transform duration-200 ease-out'>Sign out</button>
        </div>
    )
}
