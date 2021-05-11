import React from 'react';
import styles from './FormRow.module.scss';

const FormRow = props => {
  return (
    <div className={styles.Row}>
      <div className={styles.Name}>{props.name}</div>
      <div className={styles.Input}>
        {props.children}
      </div>
    </div >
  )
}

export default FormRow