import React, { Component } from 'react';
import styles from './column-header.css'

class ColumnHeader extends Component {
	constructor (){
		super()
	}
	
	render() {
		return (
			<div className={`col-md-12 ${styles[this.props.action]} ${styles.columnHeader} `}>      
			  {this.props.action}
			</div>
		);
	}
}

export default ColumnHeader
