import React, { Component } from 'react'

export default class User extends Component {
    render() {

        const {user, getUserById} = this.props;

        return (
            
                   <div>{user.id}. {user.name} <br/>
                    <button onClick={() => getUserById(user.id)}>Information</button> <hr/>
                   </div>
            
        )
    }
}
