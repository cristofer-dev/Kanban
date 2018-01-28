import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.css'

function Header(props) {
  return (
    <div className={`col-md-12 ${styles.header} `}>
      Mis Tareas
      <div>
        <Link to="/profile">View Profile</Link>
      </div>
    </div>
    
  );
}

export default Header
