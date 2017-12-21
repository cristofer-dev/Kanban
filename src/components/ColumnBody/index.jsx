import React, { Component } from 'react';
import styles from './column-body.css'

import Task from '../Task'

class ColumnBody extends Component {

	constructor (props) {
		super(props)
	}

	render() {
		return (
			<div className={`col-md-12 ${styles.columnBody} ${styles[this.props.bgColor]}`}>
				{this.props.tasks.map( task => {
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
}

export default ColumnBody
