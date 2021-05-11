import React from 'react';
import styles from './FormikCustomInput.module.scss';

const FormikCustomInput = props => {

  return (

    <input id={props.id}
      name={props.fieldName}
      value={props.value}
      onChange={props.handleOnChange}
      onBlur={props.handleOnBlur}
      placeholder={props.placeholder} />
  )
}

export default FormikCustomInput