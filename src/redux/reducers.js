import { ADD_USER, SET_USERS, DELETE_USER, UPDATE_USER } from './actions';
import * as usersDB from '../db/users.json'

const initialState = {
  users: usersDB.names,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: state.users,
      };
    case ADD_USER:
      const newUser = action.user;
      return {
        ...state,
        users: state.users.concat(newUser),
      };
    case DELETE_USER:
      const newUsersList = state.users.filter( user => user.id !== action.userId)
      return {
        ...state,
        users: newUsersList
      }
    case UPDATE_USER:
      const updatedUsersList = state.users.map( user => user.id === action.user.id ? action.user : user)
      return {
        ...state,
        users: updatedUsersList
      }
    default:
      return state;
  }
};
