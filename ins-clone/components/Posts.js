import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "codewith Kaixin Zhang",
            userImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5847f24a-889d-4f1d-971c-da2bafcfc71c/dfwrftm-18a738cf-4099-43e3-8914-7a49de0d2e3c.png/v1/fill/w_880,h_900/anya_forger_render_by_ben10andtheppgdude_dfwrftm-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNTg0N2YyNGEtODg5ZC00ZjFkLTk3MWMtZGEyYmFmY2ZjNzFjXC9kZndyZnRtLTE4YTczOGNmLTQwOTktNDNlMy04OTE0LTdhNDlkZTBkMmUzYy5wbmciLCJ3aWR0aCI6Ijw9ODgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZWjovZ-_L9QuWjHlttg3a1DNw4LGZgWgAQL6x9004Ts",
            img: "https://images6.alphacoders.com/133/1333611.jpeg",
            caption: "Waku waku!"
        },

        {
            id: "2",
            username: "codewith Kaixin Zhang aka Kevin",
            userImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5847f24a-889d-4f1d-971c-da2bafcfc71c/dfwrftm-18a738cf-4099-43e3-8914-7a49de0d2e3c.png/v1/fill/w_880,h_900/anya_forger_render_by_ben10andtheppgdude_dfwrftm-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNTg0N2YyNGEtODg5ZC00ZjFkLTk3MWMtZGEyYmFmY2ZjNzFjXC9kZndyZnRtLTE4YTczOGNmLTQwOTktNDNlMy04OTE0LTdhNDlkZTBkMmUzYy5wbmciLCJ3aWR0aCI6Ijw9ODgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZWjovZ-_L9QuWjHlttg3a1DNw4LGZgWgAQL6x9004Ts",
            img: "https://images6.alphacoders.com/129/1290527.png",
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
