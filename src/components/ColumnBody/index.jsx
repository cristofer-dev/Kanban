import React, { Component } from 'react';
import styles from './column-body.css'

class ColumnBody extends Component {
	render() {
		return (
			<div className={`col-md-12 ${styles.columnBody} ${styles[this.props.bgColor]}`}>
			 ...
			</div>
		);
	}
}

export default ColumnBody
