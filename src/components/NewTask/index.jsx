import React, { Component } from 'react';
import styles from './new-task.css'

class NewTask extends Component {

  render() {
    return (
      <form onSubmit={this.props.addNewTask}>
        <div className={`rounded row ${styles.newTask}`}>
          <div className={`col-md-8`}>
          <div className="input-group">
            <input type="text" name='text' className={`form-control`} placeholder="New Task"/>
            </div>
          </div>
          <div className={`col-md-4`}>
            <button type="submit" className="btn btn-sm btn-primary btn-block">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewTask
