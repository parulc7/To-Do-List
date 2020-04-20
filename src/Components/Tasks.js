import React, { Component } from 'react';
import '../index.css';

class Tasks extends Component{
  render(){
    const { list } = this.props;
    return(
      <ul className="collection">
        {list.map((item, i)=>{
          return(
          <li key={i} className="collection-item">
            <div>
            {item}
              <a onClick={e => this.handleDone(e, {i})} href="#!" className="secondary-content">
                <i className="material-icons">done</i>
              </a>
              <a onClick={e => this.deleteTask(e, {i})} href="#!" className="secondary-content">
                <i className="material-icons">clear</i>
              </a>
            </div>
          </li>
        );
        })}
      </ul>
    );
  }

  handleDone = (e, i)=>{
    var target = i;
    this.props.handleDone(target);
  }

  deleteTask = (e, i) =>{
    var target = i;
    this.props.deleteTask(target);
  }
}

export default Tasks;
