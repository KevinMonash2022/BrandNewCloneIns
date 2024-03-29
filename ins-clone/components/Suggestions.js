import React, { useEffect, useState } from 'react';
import minifaker from 'minifaker';

export default function Suggestions() {
    const [suggestions, setSuggestions] = useState([])
    
    useEffect(()=>{
        const suggestions = minifaker.array(5, (i)=>(
            {
                username: minifaker.username({locale:"en"}).toLowerCase(),
                jobTitle: minifaker.jobTitle(),
                id: i,
            }
        ));
        setSuggestions(suggestions);
    }, []);
    
    return (
        <div className='mt-4 ml-10'>
            {/* Suggestion title */}
            <div className="flex justify-between mb-5 text-sm">
                <h3 className='font-bold text-gray-400 '>Suggestions for you</h3>
                <button className='text-blue-400'>See all</button>
            </div>

            {/* Suggestions */}
            {suggestions.map(suggestion =>(
                <div className="flex items-center justify-between mt-3">
                    <img className='h-10 userImage' src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="user image"/>
                    <div className="flex-1 ml-3">
                        <h2 className='font-semibold text-sm text-gray-400'>{suggestion.username}</h2>
                        <h3 className='font-sm text-gray-400 truncate w-[230px]'>{suggestion.jobTitle}</h3>
                    </div>

                    <button className='fongt-semibold text-blue-400 text-sm'>Follow</button>
                </div>
            ))}
        </div>
    
  )
}
