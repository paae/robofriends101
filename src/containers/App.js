import React, { Component } from 'react'
import Cardlist from '../component/Cardlist'
import Searchbox from '../component/Searchbox'
import {robots} from '../robot';
import './App.css';
import Scroll from '../component/Scroll';
import ErrrorBondry from '../component/ErrorBoundry'
//state


class App extends Component{
  constructor(){
    super()
    this.state={
      robots:[],
      searchField:""
    }
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>{ this.setState({robots:users})
    })
   
    
  }

onSearchChange=(event)=>{
this.setState({searchField:event.target.value})
}


  render(){
    const {robots,searchField}=this.state;
const filterRobot=robots.filter(robot=>{
  return robot.name.toLowerCase().includes(searchField.toLowerCase())
})
return !robots.length ?
   <h1>Loading</h1>:

     (
      <div className='tc'>
    <h1 className='f1'>roboFriends</h1>
     <Searchbox searchChange={this.onSearchChange}/>
     <Scroll>
     <ErrrorBondry>
    <Cardlist robots={filterRobot}/>
    </ErrrorBondry>
    </Scroll>
      </div>
    );
}
  }


export default App;