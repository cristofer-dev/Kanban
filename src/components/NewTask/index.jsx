import React, { Component } from 'react';
import styles from './new-task.css'

class NewTask extends Component {

  render() {
    return (
      <div className={`rounded row ${styles.newTask}`}>
        <div className={`col-md-8`}>
        <div class="input-group">
          <input type="text" className={`form-control`} placeholder="New Task"/>
          </div>
        </div>
        <div className={`col-md-4`}>
          <button type="button" class="btn btn-sm btn-primary btn-block">Add</button>
        </div>
      </div>
    );
  }
}

export default NewTask
