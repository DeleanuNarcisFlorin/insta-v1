import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id:"1",
            username:"Narcis",
            userImg:"https://scontent.fcra2-1.fna.fbcdn.net/v/t1.6435-9/161054004_3380644385374879_2393323840128663172_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nCEBwgVhMLIAX-UyI1R&_nc_ht=scontent.fcra2-1.fna&oh=00_AT_taiCD1JK_yUpibqTcxMyiTnQTPU-0hF8mIdEMbBpgeQ&oe=6351067D",
            img: "https://images.unsplash.com/photo-1663615280810-81f2f47f3b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            caption: "Love this place"
        },
        {
            id:"2",
            username:"Florin",
            userImg:"https://scontent.fcra2-1.fna.fbcdn.net/v/t1.6435-9/161054004_3380644385374879_2393323840128663172_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nCEBwgVhMLIAX-UyI1R&_nc_ht=scontent.fcra2-1.fna&oh=00_AT_taiCD1JK_yUpibqTcxMyiTnQTPU-0hF8mIdEMbBpgeQ&oe=6351067D",
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
