import React from 'react';
import styles from './header.css'

function Header(props) {
  return (
    <div className={`col-md-12 ${styles.header} `}>
      Mis Tareas
    </div>
  );
}

export default Header
