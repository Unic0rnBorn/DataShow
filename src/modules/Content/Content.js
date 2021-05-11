import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListElement from '../../components/ListElements';
import ListHead from '../../components/ListHead'
import AddUser from '../AddUserContainer'

import { Route, Switch } from 'react-router-dom';
import * as usersActions from '../../redux/actions';
import styles from './Content.module.scss';

const Content = props => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.loadUsers());
  }, [dispatch]);

  const onDeleteHandler = (id) => {
    dispatch(usersActions.deleteUser(id))
  }

  const onUserUpdateHandler = (user) => {
    dispatch(usersActions.updateUser(user))
  }

  return (
    <div className={styles.ContentContainer}>
      <Switch>
        <Route exact path="/userList" >
          <h1 className={styles.Header}>
            List of users
          </h1>
          <table className={styles.UsersTable}>
            <tbody>
            <ListHead />
                {users?.map( user => 
                <ListElement
                  userData={user}
                  onDelete={onDeleteHandler}
                  onUserUpdate={onUserUpdateHandler}
                  key={Math.random()}
                />)}  
            
            </tbody>
          </table>
          </Route>
        <Route path='/addUser'>
          <AddUser />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
