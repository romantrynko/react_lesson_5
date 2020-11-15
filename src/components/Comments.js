import React, { useEffect, useState } from 'react'

const Comments = ({ history, match }) => {

    let [comments, setComments] = useState([])

    const postId = match.params.id;

    const goToHome = () => {
        history.push({
            pathname: '/'
        })
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => setComments(comments))
    })

    return (
        <div>
            <h2>Comments</h2>
            <button onClick={goToHome}>Home</button>
            {
                comments.filter(comment => (
                    comment.postId === Number(postId)
                )).map(comment => (
                    <div key={comment.id}>
                        <h3>id: {comment.id}</h3>
                        <h3>postId: {comment.postId}</h3>
                        <h3>{comment.name}</h3>
                        <button onClick={() => history.push(`/comments/${comment.id}`)}>Show comment</button>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments;
