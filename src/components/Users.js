import React, { useEffect, useState } from 'react';

const Users = ({ history }) => {

    const [users, setUsers] = useState([])

    const goToHome = () => {
        history.push({
            pathname: '/'
        })
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    })

    return (
        <div>
            <h2>Users</h2>
            {
                users && users.map(user => (
                    <div key={user.id}>
                        <h3>Name: {user.name}</h3>
                        <h4>Username: {user.username}</h4>
                        <h4>Email: {user.email}</h4>
                        <br/>
                        <div>
                            <button onClick={() => history.push(`/users/${user.id}`)}>Show user</button>
                            <button onClick={() => history.push(`/users/${user.id}/posts`)}>Show posts</button>
                        </div>
                        <hr/>
                    </div>
                ))
            }
            <button onClick={goToHome}>Home</button>
        </div>
    )
}

export default Users;
