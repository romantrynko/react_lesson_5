import './App.css';

import React, { Component } from 'react'
import UserList from './components/UserList';

export default class App extends Component {

  state = {
    users: []
  }

  getUserById = (id) => {
    let { users } = this.state;
    let find = users.find(value => value.id === id);
    console.log(find);
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => this.setState({ users: value }))
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} getUserById={this.getUserById} />
      </div>
    )
  }
}
