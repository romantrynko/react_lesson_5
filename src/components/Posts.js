import React, { useEffect, useState } from 'react'

const Posts = ({ history, match }) => {

    let [posts, setPosts] = useState([]);

    const userId = match.params.id;

    const goToHome = () => {
        history.push({
            pathname: '/'
        })
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(posts => setPosts(posts))
    })

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={goToHome}>Home</button>

            {
                posts.filter(post => (
                    post.userId === Number(userId)
                )).map(post => (
                    <div key={post.id}>
                        <p>id: {post.id}</p>
                        <p>userId: {post.userId}</p>
                        <p>title: {post.title}</p>
                        <button onClick={() => history.push(`/posts/${post.id}/comments`)}>Show comments</button>
                        <hr />
                    </div>
                ))
            }

        </div>
    )
}

export default Posts;
