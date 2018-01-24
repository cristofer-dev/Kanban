import React from 'react';
import styles from './column-header.css'

function ColumnHeader(props) {
  return (
    <div>
      <div className={`
        col
        ${styles[props.action]}
        ${styles.columnHeader}
        ${styles.flexcontainer}
        `}>
        <i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
        {props.action}
      </div>
      <div className={`col`}>
        
        <i onClick={props.onOpenText} 
          className={`rounded-circle fa fa-plus ${styles.plus}`} 
          aria-hidden="true">
        </i>
        
      </div>
    </div>
  );
}

export default ColumnHeader
