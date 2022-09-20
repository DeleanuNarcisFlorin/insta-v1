import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id:"1",
            username:"Narcis",
            userImg:"http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png",
            img: "https://images.unsplash.com/photo-1663615280810-81f2f47f3b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            caption: "Love this place"
        },
        {
            id:"2",
            username:"Florin",
            userImg:"http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png",
            img: "https://images.unsplash.com/photo-1663592151816-b30533dc08ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            caption: "Smoke the food"
        }
    ]

    return <div>
            {posts.map(post =>(
                <Post
                    key ={post.id}
                    id = {post.id}
                    username = {post.username}
                    userImg = {post.userImg}
                    img = {post.img}    
                    caption = {post.caption}
                />
            ))}
        </div>;
  
}
