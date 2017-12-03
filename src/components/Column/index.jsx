import React, { Component } from 'react';
import styles from './column.css'
import ColumnHeader from '../ColumnHeader'
import ColumnBody from '../ColumnBody'

class Column extends Component {  
  render() {
    return (
      <div className={`sinpadding col-md-3 ${styles.column} `}>      
        
        <ColumnHeader action={this.props.action}/>
        <ColumnBody />

      </div>
    )
  }
}

export default Column
