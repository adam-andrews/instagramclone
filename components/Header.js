import React from 'react';
import Image from 'next/image';
import {
	SearchIcon,
	PlusCircleIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
    UserGroupIcon,
} from '@heroicons/react/outline';

import {
	HomeIcon
} from '@heroicons/react/solid';
function Header() {
	return (
		<div>
			<div className="flex justify-between max-w-6xl  mx-5 xl:mx-auto ">
				<div className="relative  hidden lg:inline-grid w-24">
					{/* Left */}
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				{/* Middle */}
				<div className='max-w-xs'>
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
							<SearchIcon className="h-5 w-5  text-gray-500" />
						</div>
						<input
							className="outline-0	bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black"
							type="text"
							placeholder="search"
						></input>
					</div>
				</div>
                <div className='flex items-center justify-end space-x-4'>
                <HomeIcon className='navBtn'/> 
                <MenuIcon className='h-6 w-6 md:hidden cursor-pointer'/> 
                <PaperAirplaneIcon className='navBtn'/>
                <PlusCircleIcon className='navBtn'/>
                <UserGroupIcon className='navBtn'/>
                <HeartIcon className='navBtn'/>
                <img className="h-10 w-10 rounded-full object-cover"src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg/" alt ="hello"></img>
                </div>
                
			</div>

			{/* Right */}
            
		</div>
	);
}

export default Header;
