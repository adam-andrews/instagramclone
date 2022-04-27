import React from 'react';
import Post from './Post';

const posts = [
	{
		id: '123',
		username: 'adam',
		userImg:
			'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg/',
		img: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg/',
		caption: 'This is a photo of my dog',
	},
	{
		id: '123',
		username: 'adam',
		userImg:
			'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg/',
		img: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg/',
		caption: 'This is a photo of my dog',
	},
	{
		id: '123',
		username: 'adam',
		userImg:
			'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg/',
		img: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg/',
		caption: 'This is a photo of my dog',
	},
];
function Posts() {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					userImg={post.userImg}
					img={post.img}
					username={post.username}
                    caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
