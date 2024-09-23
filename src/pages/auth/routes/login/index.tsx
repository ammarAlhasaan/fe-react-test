import {Field, Form, Formik} from 'formik';
import {FormContainer, InputField} from 'components/common/formik';
import React, {useState} from 'react';
import {Button, Row} from 'components/core';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {login} from "_redux/auth";
import IUser from "types/user.type";
import {useNavigate} from "react-router-dom";

export type LoginFormValues = Pick<IUser, 'email' | 'password'>;

const initialValues: LoginFormValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      // Await the dispatch to catch any errors it might throw
      const resultAction = await dispatch(login(values));

      // Check if the action was rejected
      if (login.rejected.match(resultAction)) {
        console.error('Login failed:', resultAction.payload); // payload contains the error message
      } else {
        console.log('Login successful:', resultAction.payload);
      }
    } catch (error) {
      console.error('An unexpected error occurred', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({handleSubmit}) => (
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <Field
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your username"
              component={InputField}
            />
            <Field
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
              component={InputField}
            />
            <Row gap="1rem" justifyContent="end">
              <Button kind="text" type="submit" onClick={() => navigate('/auth/register')}>
                Create account
              </Button>
              <Button type="submit" isLoading={loading}>
                Login
              </Button>
            </Row>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
