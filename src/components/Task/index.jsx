import React, { Component } from 'react';
import styles from './task.css'

class Task extends Component {
	render() {
		return (
			<div className={`rounded ${styles.hvrFloatShadow} ${styles.task} `}>Task n
			<img src="https://randomuser.me/api/portraits/women/72.jpg" class="rounded-circle float-right"/>
			</div>
		);
	}
}

export default Task
