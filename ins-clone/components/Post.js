import React from 'react';
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleLeftEllipsisIcon, BookmarkIcon } from '@heroicons/react/24/outline';

export default function Post({ img, userImg, caption, username, id }) {
    return (
        <div className='bg-white my-7 border rounded-md'>
            {/* Post header */}
            <div className='flex items-center p-5'>
                <img className='h-12 rounded-full object-cover border p-1 border-red-300 mr-3' src={userImg} alt={username} />
                <p className='font-bold flex-1'>{username}</p>
                <EllipsisHorizontalIcon className='h-5' />
            </div>


            {/* Post Image */}
            <img className='obect-cover w-full' src={img} alt='img' />

            {/* Post Buttons */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className='buttn' />
                    <ChatBubbleLeftEllipsisIcon className='buttn' />
                </div>
                <BookmarkIcon className='buttn' />
            </div>

        </div>
    )
}
