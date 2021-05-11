import { ErrorMessage } from 'formik';
import React from 'react';

const FormikErrorMessage = props => {
  return (
    <ErrorMessage name={props.name}/>
  );
}

export default FormikErrorMessage