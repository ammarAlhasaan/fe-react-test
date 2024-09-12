import { Field, Form, Formik, FormikHelpers } from 'formik';
import { FormContainer, InputField } from 'components/common/formik'; // Adjust the import paths as necessary
import React from 'react';
import { Button, Row } from 'components/core'; // Adjust the import paths as necessary
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {login} from "redux/auth/action"; // Yup for form validation

// Define the types for the form values
interface LoginFormValues {
  email: string;
  password: string;
}

// Initial values for the login form
const initialValues: LoginFormValues = {
  email: '',
  password: '',
};

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      // Dispatch the login action with the user credentials
      dispatch(login({ userInfo: { email: values.email }, userToken: 'fakeToken' })); // Replace 'fakeToken' with actual token
      console.log('Login successful', values);
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <Field
              name="username"
              label="Username"
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
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </Button>
            </Row>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default LoginScreen;
