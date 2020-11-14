import React from 'react';
import './App.css';
import { MyProvider } from './contextService';
import Parent from './Parent';
import UserService from './UserService';

class App extends React.Component {

  userService = new UserService();
  state = {
    users: []
  }
  async componentDidMount() {
    let users = await this.userService.getUser();
    this.setState({users});
  }

  render() {
    return (
      <div>
      <MyProvider value={'hello'}>
        <Parent/>
      </MyProvider>
      </div>
    );
  }
}

export default App;
