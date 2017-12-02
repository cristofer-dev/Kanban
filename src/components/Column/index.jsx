import React, { Component } from 'react';
import styles from './column.css'

class Column extends Component {
  constructor (){
    super()


  }
  
  render() {
    return (
      <div className={`col-md-3 ${styles.column} `}>      
        {this.props.action}
      </div>
    )
  }
}

export default Column