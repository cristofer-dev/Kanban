import React, { Component } from 'react';
import styles from './task.css'

class Task extends Component {
	constructor (props) {
		super(props)
	}

	render() {
		return (
			<div className={`rounded ${styles.hvrFloatShadow} ${styles.task} `}>
			{this.props.text}
			<img src="https://randomuser.me/api/portraits/women/72.jpg" className="rounded-circle float-right"/>
			</div>
		);
	}
}

export default Task
