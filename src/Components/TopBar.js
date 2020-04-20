import React, { Component } from 'react';
import '../index.css';

class TopBar extends Component{
  constructor(props, e)
  {
    super(props);
  }
  render(){
    let { completed, uncomplete, pending } = this.props;
    return(
      <div className="row">
        <div className="center-align add-button col l3 m3 s12">
          <button data-target="modal1" className=" btn btn-floating btn-large waves-effect waves-light red modal-trigger"><i className="material-icons">add</i></button>
          <form onSubmit={this.handlesubmit} id="modal1" className="modal">
           <div className="modal-content">
             <h4>What else do you plan on doing today?</h4>
             <input type="text" name="new_task" placeholder="Write inside me!" autoComplete="off"/>
           </div>
           <div className="modal-footer">
             <button type='submit' href="#!" className="modal-close waves-effect waves-green btn-flat"><i className="material-icons">send</i></button>
           </div>
         </form>
        </div>
        <div className="center-align add-button col l3 m3 s12">
          <div className="card-panel">
              <span className="black-text text-darken-2">{completed} tasks completed</span>
          </div>
        </div>
        <div className="center-align add-button col l3 m3 s12">
          <div className="card-panel">
            <span className="black-text text-darken-2">{uncomplete} tasks uncompleted</span>
          </div>
        </div>
        <div className="center-align add-button col l3 m3 s12">
          <div className="card-panel">
              <span className="black-text text-darken-2">{pending} tasks pending</span>
          </div>
        </div>
      </div>
    )
  }

  handlesubmit = (e) => {
    var target = e.target.elements.new_task.value;
    console.log(target);
    if(target.length > 0 && target !== " "){
      this.props.addTask(target);
      e.target.reset();
      e.preventDefault();
    }
  }
}

export default TopBar;
