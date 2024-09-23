import {Field, Form, Formik} from 'formik';
import {FormContainer, InputField} from 'components/common/formik'; // Adjust the import paths as necessary
import React, {useState} from 'react';
import {Button, Row} from 'components/core'; // Adjust the import paths as necessary
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {registerUser} from "_redux/auth";
import IUser from "types/user.type";
import {useNavigate} from "react-router-dom";


export type RegisterFormValues = Omit<IUser, 'id'>;

const initialValues: RegisterFormValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (
    values: RegisterFormValues,
  ) => {
    setLoading(true)
    try {
      dispatch(registerUser(values));
      navigate('/auth/login')
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setLoading(false)
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
              name="name"
              label="Name"
              placeholder="Enter your username"
              component={InputField}
            />
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
              <Button kind="text" type="submit" onClick={() => navigate('/auth/login')}>
                Login
              </Button>
              <Button type="submit" isLoading={loading}>
                Create account
              </Button>
            </Row>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
