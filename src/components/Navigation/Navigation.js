import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = props => {
  return (
    <div className={styles.NavigationContainer}>
      <div className={styles.Navigation}>
        <NavLink activeClassName={styles.NavSelected} to="/userList">Users</NavLink>
        <NavLink activeClassName={styles.NavSelected} to="/addUser">Add</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
