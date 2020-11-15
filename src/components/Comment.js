import React, { useEffect, useState } from 'react'

const Comment = ({ history, match }) => {

    let [comment, setComment] = useState();

    const goToHome = () => {
        history.push({
            pathname: '/'
        })
    }

    useEffect(() => {

        const id = match.params.id;

        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(response => response.json())
            .then(comment => setComment(comment))
    })

    return (
        <div>
            <button onClick={goToHome}>Home</button>
            {
                comment && (
                    <div >
                        <h2>Name: {comment.name}</h2>
                        <h3>Body: {comment.body}</h3>
                        <br />
                    </div>
                )
            }
        </div>
    )
}

export default Comment;
