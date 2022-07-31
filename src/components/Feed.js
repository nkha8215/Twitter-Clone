import React, { useEffect, useState } from 'react';
import './Feed.css'
import TweetBox from './TweetBox';
import Post from './ui/Post';
import db from '../firebase/init'
import { collection, onSnapshot } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "posts"), (snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => doc.data())
            )
        })
        console.log(posts)
    }, [])

    return (
        <div className='feed'>
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Posts */}
            <FlipMove>
            {posts.map(post => (
                <Post 
                    key={post.text}
                    displayName={post.displayName} 
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
            </FlipMove>
            
            
        </div>
    );
}

export default Feed;
