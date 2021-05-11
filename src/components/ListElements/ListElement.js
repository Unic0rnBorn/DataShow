import React, { useState } from 'react';
import { DivButton } from '../Button'
import { userDataDirection } from '../../modules/Content/directionQue'
import styles from './ListElement.module.scss';

const ListElement = props => {
  const [editable, setEditable] = useState(false)
  const [userData, setUserData] = useState(props.userData)

  const switchEditMode = () => {
    if(editable){
      props.onUserUpdate(userData)
    }
    setEditable(!editable)
  }

  const onEditHandler = (el, e) => {
    e.persist()
    const editedUser = userData;
    editedUser[el] = e.target.value;
    setUserData(editedUser)
  }

  return (
    <tr>
      {userDataDirection?.map( el => {
        return (
          <td
            key={Math.random()}
          >
            <input
              className={styles.Input}
              type='text'
              disabled={!editable}
              onBlur={(e) => onEditHandler(el, e)}
              placeholder={userData[el]}/>
          </td>
        )
      })}
      <td><DivButton onClick={() => props.onDelete(userData.id)}>Delete</DivButton></td>
      <td><DivButton onClick={switchEditMode}>{editable ? 'Save' : 'Edit'}</DivButton></td>
    </tr>
  );
};

export default ListElement;
