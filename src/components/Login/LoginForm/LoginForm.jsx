import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import loginFormSchema from "../../FormValidation/LoginFormSchema";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}

            onSubmit={(values) => {
                console.log("values");
                console.log(values);
                props.login(values.email, values.password, values.rememberMe);
            }}
             validationSchema={loginFormSchema}
            >
            {({ handleSubmit }) => {
                return (
                    <Form onSubmit={handleSubmit} className={styles.formContainer}>
                        <div>
                            <label className={styles.label}>Email Address</label>
                            <Field type="text" name="email" className={styles.field} />
                            <ErrorMessage name="email" component="div"  className={styles.errorMessage}/>
                        </div>
                        <div>
                            <label className={styles.label}>Password</label>
                            <Field type="password" name="password" className={styles.field}/>
                            <ErrorMessage name="password" component="div" className={styles.errorMessage}/>
                        </div>
                        <div>
                        <Field type="checkbox" name="rememberMe"  className={styles.checkbox}/>
                            <label htmlFor="rememberMe"> remember me </label>
                        </div>
                        <button type="submit" className={styles.button}>Login</button>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default LoginForm;