import { onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useEffect, useState } from 'react';
import Post from './Post';
import {db} from "../firebase";
import {collection,query,orderBy} from '@firebase/firestore';

function Posts() {
	const [posts, setPosts] = useState([]);
    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy("timestamp","desc")), snapshot => {
            setPosts(snapshot.docs);
        });
        
    },[db]);

    return (
        <div>
            {/* {posts.map((post) => (
                <Post
                    key={post.id}
                    userImg={post.userImg}
                    img={post.img}
                    username={post.username}
                    caption={post.caption}
                />
            ))} */}
        </div>
    );
}

export default Posts;