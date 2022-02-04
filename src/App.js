import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Card from './component/card/card.component';
import Search from './component/search/search.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchUsers: ' '
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render() {
    const {users , searchUsers} = this.state;
    const filterUser = users.filter(user => user.name.toLowerCase().includes(searchUsers.toLowerCase()));
    
  if(filterUser.length>0){
    return (
      <div className="App">
        <h1>User Name</h1>
        <Search handleMethod = {e => this.setState({ searchUsers: e.target.value })}>
          
        </Search>
        
        <Card users={filterUser}></Card>
      </div>
    )
  }else{
  return (
    <div className="App">
      <h1>User Name</h1>
      <Search handleMethod = {e => this.setState({ searchUsers: e.target.value })}>
        
      </Search>
      
      <h1>Does not match anything</h1>
    </div>
  ) }
  
  }
}


export default App;
