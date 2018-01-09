import React, { Component } from 'react';
import styles from './column.css'
import ColumnHeader from '../ColumnHeader'
import ColumnBody from '../ColumnBody'
import NewTask from '../NewTask'
import uuid from 'uuid'

class Column extends Component {  

  constructor (props) {
      super(props)
      this.state = {
          OpenText : false,
          tasks: this.props.tasks
      }

      this.handleOpenText = this.handleOpenText.bind(this)
      this.addNewTask = this.addNewTask.bind(this)
  }

  handleOpenText (event){
      event.preventDefault()
      this.setState({ OpenText : !this.state.OpenText })
  }

  addNewTask (event) {
    event.preventDefault()

    let newTask = {
      id: uuid.v4(),
      text: event.target.text.value
    }

    this.setState({
      tasks : this.state.tasks.concat([newTask]),
      OpenText : false,
    })
  }

  renderOpenText (){
      if ( this.state.OpenText ) {
          return <NewTask
            addNewTask={this.addNewTask}
          />
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
        <ColumnBody tasks={this.state.tasks} bgColor={this.props.bgColor} />
      </div>
    )
  }
}

export default Column
