import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        const {users} = this.props;
        return (
            <div>
            {
                users.map(user => (
                    <div>
                        {user.name}
                    </div>
                ))

            }

        </div>
        )
    }
}
