import React, { Component } from 'react';
import Header from './Components/Header.js';
import TopBar from './Components/TopBar.js';
import Tasks from './Components/Tasks.js';
import './index.css';

class App extends Component{
  state = {
    tasks :[],
    countCompleted:0,
    countUncompleted:0,
    countPending:0
  }
  render(){
    return(
      <div className='container'>
        <Header title = "To Do List"/>
        <TopBar addTask={this.addTask.bind(this)} taskList={this.state.tasks} completed={this.state.countCompleted} uncomplete={this.state.countUncompleted} pending={this.state.countPending}/>
        <Tasks deleteTask={this.deleteTask} handleDone={this.handleDone} list={this.state.tasks}/>
      </div>
    );
  }
  addTask = (task) =>
  {
    this.setState({
      tasks:[...this.state.tasks, task],
      countPending:this.state.countPending+1
    });
  }
  handleDone = (e, key) =>
  {
    var arr = [...this.state.tasks];
    arr.splice(key,1);
    this.setState({
      tasks:arr,
      countCompleted:this.state.countCompleted+1,
      countPending:this.state.countPending-1
    })
  }
  deleteTask = (e, key)=> {
    var arr = [...this.state.tasks];
    arr.splice(key,1);
    this.setState({
      tasks:arr,
      countUncompleted:this.state.countUncompleted+1,
      countPending:this.state.countPending-1
    });
  }
}

export default App;
