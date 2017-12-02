import React, { Component } from 'react';
import styles from './header.css'

class Header extends Component {
	constructor (){
		super()
	}
	
	render() {
		return (
			<div className={`col-md-12 ${styles.header} `}>
			Mis Tareas
			</div>
		);
	}
}

export default Header