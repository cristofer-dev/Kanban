import React, { Component } from 'react';
import styles from './new-task.css'

class NewTask extends Component {

  render() {
    return (
      <div className={`rounded ${styles.newTask}`}>
        <input type="text"/>
      </div>
    );
  }
}

export default NewTask
