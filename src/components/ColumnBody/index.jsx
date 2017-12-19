import React, { Component } from 'react';
import styles from './column-body.css'

import Task from '../Task'

class ColumnBody extends Component {

	constructor (props) {
		super(props)
		console.log(this.props.tasks)
	}

	render() {
		return (
			<div className={`col-md-12 ${styles.columnBody} ${styles[this.props.bgColor]}`}>
				{this.props.tasks.map( task => {
					return (
						<Task 
							key={task.id}
							text={task.text}
							asigned={task.asigned}
						/>
					)
				} )}

			</div>
		);
	}
}

export default ColumnBody
