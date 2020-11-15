import React, { useEffect, useState } from 'react'

const AllPosts = () => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
    })

    return (
        <div>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h2>Post</h2>
                        <h3>id: {post.id}</h3>
                        <h3>userId: {post.userId}</h3>
                        <h3>title: {post.title}</h3>
                        <hr/>
                    </div>
                ))

            }
        </div>
    )
}

export default AllPosts;
