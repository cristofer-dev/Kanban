import React, { Component } from 'react';
import styles from './column-header.css'

class ColumnHeader extends Component {
	constructor (){
		super()
	}
	
	render() {
		return (
			<div className={`col-md-12 ${styles.columnHeader} `}>      
			  {this.props.action}
			</div>
		);
	}
}

export default ColumnHeader