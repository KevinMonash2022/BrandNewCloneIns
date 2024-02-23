import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "codewith Kaixin Zhang",
            userImg: "https://storage.googleapis.com/sticker-prod/J0kvw34krCDQNNHoZjEt/cover-1.webp",
            img: "https://images7.alphacoders.com/133/thumb-440-1339435.webp",
            caption: "Waku waku!"
        },

        {
            id: "2",
            username: "codewith Kaixin Zhang aka Kevin",
            userImg: "https://storage.googleapis.com/sticker-prod/J0kvw34krCDQNNHoZjEt/cover-1.webp",
            img: "https://images6.alphacoders.com/129/thumb-440-1290527.webp",
            caption: "?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿"
        }
    ]
    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    )
}
