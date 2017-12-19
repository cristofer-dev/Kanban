import React, { Component } from 'react';
import styles from './column.css'
import ColumnHeader from '../ColumnHeader'
import ColumnBody from '../ColumnBody'
import NewTask from '../NewTask'

class Column extends Component {  

  constructor (props) {

      super(props)
      this.state = {
          OpenText : false
      }

      this.handleOpenText = this.handleOpenText.bind(this)

      // console.log(this.props.tasks)
  }

  handleOpenText (event){
      event.preventDefault()
      this.setState({ OpenText : !this.state.OpenText })

  }

  renderOpenText (){
      if ( this.state.OpenText ) {
        console.log("Ok")
          return <NewTask/>
      }
  }

  render() {
    return (
      <div className={`sinpadding col-md-3 ${styles.column} `}>
        <ColumnHeader 
          onOpenText={this.handleOpenText}
          action={this.props.action} 
          icon={this.props.icon}
        />
        <div className={`col-md-12`}>
          {this.renderOpenText()}
        </div>
        <ColumnBody tasks={this.props.tasks} bgColor={this.props.bgColor} />
      </div>
    )
  }
}

export default Column
