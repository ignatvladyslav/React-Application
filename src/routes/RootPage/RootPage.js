import React from 'react';
import styles from './RootPage.css';
import { Link } from 'dva/router';

export default ({children}) => {
  return (
    <div className={styles.normal}>
      <ul id="nav" style={{display: 'none'}}>
        <li><Link to="/">root</Link></li>
        <li><Link to="/edit">edit</Link></li>
        <li><Link to="/add">add</Link></li>
        <li><Link to="/remove">remove</Link></li>
        <li><Link to="/search">search</Link></li>
      </ul>
      {children}
    </div>
  );
}
