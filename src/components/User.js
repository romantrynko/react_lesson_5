import React, { useEffect, useState } from 'react'

const User = ({ match }) => {

    const [user, setUser] = useState();

    useEffect(() => {

        const id = match.params.id;

        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(user => setUser(user))
    })

    return (
        <div>
            {
                user && (
                    <div>
                        <hr/>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <hr/>
                    </div>
                )
            }
        </div>
    )

}

export default User;
