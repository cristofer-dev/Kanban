import React, { Component } from 'react';
import styles from './column-body.css'

import Task from '../Task'

class ColumnBody extends Component {
	render() {
		return (
			<div className={`col-md-12 ${styles.columnBody} ${styles[this.props.bgColor]}`}>
				<Task/>
				<Task/>
				<Task/>
				<Task/>
			</div>
		);
	}
}

export default ColumnBody
