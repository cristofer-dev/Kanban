import React, { Component } from 'react';
import styles from './column-body.css'

class ColumnBody extends Component {
	constructor (){
		super()
	}
	
	render() {
		return (
			<div className={`col-md-12 ${styles.columnBody} `}>      
			 ...
			</div>
		);
	}
}

export default ColumnBody