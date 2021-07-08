import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormFeedback, Label } from 'reactstrap';
import { Schema } from './schema';
// import { useForm } from '@formspree/react';

import { cContactForm } from './constants';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  // const [submit, handleSubmit] = useForm(`${process.env.FORMSPREE_ID}`);

  return (
    <Formik
      initialValues={{
        [cContactForm.name]: '',
        [cContactForm.email]: '',
        [cContactForm.message]: '',
      }}
      onSubmit={(values) => {
        // handleSubmit(values);
      }}
      // validate={(values) => {
      //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      //   const errors = {};
      //   if (!values.name) {
      //     errors.name = 'Name Required';
      //   }
      //   if (!values.email || !emailRegex.test(values.email)) {
      //     errors.email = 'Valid Email Required';
      //   }
      //   if (!values.message) {
      //     errors.message = 'Message Required';
      //   }
      //   return errors;
      // }}
      validationSchema={Schema}
    >
      {({ isSubmitting, values, errors, setFieldValue }) => (
        <Form>
          <ReCAPTCHA sitekey="6Ld8EYAbAAAAAOAJwoiIMlctIj5731s2httWqV4W" onChange={(value) => setFieldValue(cContactForm.captcha, value)} />,
          <div>
            <pre
              style={{
                whiteSpace: 'pre-wrap',
              }}
            >
              <code data-testid="content">{JSON.stringify(values, null, 2)}</code>
            </pre>
            <pre
              style={{
                whiteSpace: 'pre-wrap',
              }}
            >
              <code data-testid="content">{JSON.stringify(errors, null, 2)}</code>
            </pre>
          </div>
          <div className="mb-4">
            <Label for={cContactForm.name}>Name: </Label>
            <Field name={cContactForm.name} id={cContactForm.name} className="form-control" />
            <FormFeedback>{errors[cContactForm.name]}</FormFeedback>
          </div>
          <div className="mb-4">
            <Label for={cContactForm.email}>Email: </Label>
            <Field name={cContactForm.email} id={cContactForm.email} className="form-control" />
            <ErrorMessage name={cContactForm.email} component={'div'} />
          </div>
          <div className="mb-4">
            <Label for={cContactForm.message}>Message: </Label>
            <Field name={cContactForm.message} component="textarea" id={cContactForm.message} className="form-control" style={{ minHeight: '230px' }} />
            <ErrorMessage name={cContactForm.message} component={FormFeedback} />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
