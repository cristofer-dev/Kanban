import React from 'react';
import styles from './column-body.css'

import Task from '../Task'



function ColumnBody(props) {
  return (
    <div className={`col-md-12 ${styles.columnBody} ${styles[props.bgColor]}`}>
      {props.tasks.map( task => {
        return (
          <Task
            key={task.id}
            text={task.text}
            assigned={task.assigned}
          />
        )
      } )}
    </div>
  );
}

export default ColumnBody
