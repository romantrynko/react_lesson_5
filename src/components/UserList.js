import React, { Component } from 'react'
import User from './User';

export default class UserList extends Component {
    render() {

        const {users, getUserById} = this.props;


        return (
            <div>
                {
                    users.map(user => (
                        <User user={user} getUserById={getUserById} key={user.id}/>
                    ))
                }
            </div>
        )
    }
}
