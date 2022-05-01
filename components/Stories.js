import React from 'react';
import faker from 'faker';
import { useEffect, useState } from 'react';
import Story from './Story';
import { generateAvatar } from '../utils';
import { useSession } from 'next-auth/react';
function Stories() {

	const {data:session} = useSession();
	const [suggestions, setSuggestions] = useState([]);
	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
			img: generateAvatar(Math.random()),
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thumb-black'>
			{session && (
				<Story  img={session.user.image} username={session.user.username}/>
		
				
			)}
			{suggestions.map((profile) => (
				<Story key={profile.id} img={profile.img} username={profile.username} />
			))}
		</div>
	);
    
}

export default Stories;
