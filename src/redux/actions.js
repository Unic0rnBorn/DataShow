export const ADD_USER = 'ADD_USER';
export const SET_USERS = 'SET_USERS';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';
export const UPDATE_USER = 'UPDATE_USER'

export const addUser = (user) => {
  return dispatch => {
    return dispatch({
      type: ADD_USER,
      user: user
    })
  }
};

export const deleteUser = (id) => {
  return dispatch => {
    return dispatch({
      type: DELETE_USER,
      userId: id 
    })
  }
}

export const updateUser = (user) => {
  return dispatch => {
    return dispatch({
      type: UPDATE_USER,
      user: user
    })
  }
}

export const editUser = (user) => {
  return dispatch => {
    return dispatch({
      type: EDIT_USER,
      user: user 
    })
  }
}

export const loadUsers = () => {
  return dispatch => {
    dispatch({
      type: SET_USERS,
    });
  };
};
