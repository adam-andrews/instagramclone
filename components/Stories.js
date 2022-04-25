import React from 'react';
import faker  from 'faker';
import { useEffect,useState } from 'react';
import Story from './Story';
import {generateAvatar} from "./utils";
function Stories() {
    const [suggestions,setSuggestions] = useState([])
	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
            img: generateAvatar(Math.random()),
		}));

        setSuggestions(suggestions)
	}, []);

	return <div>
        {suggestions.map(profile => ( 
            <Story key={profile.id} img={profile.img} username={profile.username}/>
        ))}
    </div>;
}

export default Stories;
