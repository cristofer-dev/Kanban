import React, { Component } from 'react';
import styles from './column-header.css'

class ColumnHeader extends Component {
	constructor (){
		super()
	}
	
	render() {
		return (
			<div>
			<div className={`col ${styles[this.props.action]} ${styles.columnHeader} ${styles.flexcontainer}`}>      
			  <i className={`fa fa-${this.props.icon}`} aria-hidden="true"></i>
			  {this.props.action}
			</div>
			<div className={`col`}>
				
				<i onClick={this.props.onOpenText} className={`rounded-circle fa fa-plus ${styles.plus}`} aria-hidden="true"></i>
				
			</div>
			</div>
		);
	}
}

export default ColumnHeader
