import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
 import { Formik, Form, Field } from 'formik';
import { Button } from '../../components/Button'
import * as usersActions from '../../redux/actions';
import styles from './AddUser.module.scss';
 import FormContainer from '../../components/Form/FormContainer'
 import FormRow from '../../components/Form/FormRow' 
 import ErrorMessageHandler from '../../components/Form/ErrorMessage'
 import * as Yup from 'yup';

 const phoneRegex = /^(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}$/;
 
 const validationSchema = Yup.object().shape({

  id: '',
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required(),
  surname: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid surname')
    .max(40)
    .required(),
  birthDate: Yup.string()
    .required(),
  phone: Yup.string()
    .test(
      'phone Validator',
      'wrongFormat',
      value => value && phoneRegex.test(value)
    )
    .required(),
  city: Yup.string()
    .matches(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/, 'Please enter valid City')
    .max(40)
    .required(),
  street: Yup.string()
    .matches(/^[A-Za-z0-9'\.\-\s\,]*$/, 'Please enter valid street')
    .max(40)
    .required(),
  number: Yup.string()
    .matches(/^[0-9]*$/, 'Please enter valid number')
});

const AddUser = props => {
  const initialValues = {
    name: '',
    surname: '',
    birthDate: '',
    phone: '',
    city: '',
    street: '',
    number: ''
  }

  const history = useHistory();
  const dispatch = useDispatch();

  const onSaveHandler = (val) => {
    const id = Math.floor(Math.random() * (100000 - 100)) + 100;;
    const data = { id, ...val}
    dispatch(usersActions.addUser(data))
    history.push('/')
  }

  return <div className={styles.AddUser}>
     <h1>Add user</h1>

     <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={onSaveHandler}
        validateOnBlur
        validateOnChange={true}
      >
        {(formikProps) => (
          <Form className={styles.Form}>
            <FormContainer >
              {Object.keys(initialValues).map(val => {
                return(
                  <FormRow key={val} name={val}>
                    <Field name={val}/>
                    <ErrorMessageHandler name={val} />
                  </FormRow>
                  )
                }
              )}
            </FormContainer>
            <Button type='submit' onSubmit={formikProps.handleSubmit}>Save</Button>
          </Form>
        )}
    </Formik>
   </div>

};

export default AddUser;
