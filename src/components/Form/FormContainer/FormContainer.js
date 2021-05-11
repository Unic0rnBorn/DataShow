import React from 'react';
import styles from './FormContainer.module.scss';

const FormContainer = props => {

  return (
    <div className={styles.Contiainer}>
      {props.children}
    </div >
  )
}

export default FormContainer