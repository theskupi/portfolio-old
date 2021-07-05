import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormFeedback, Label } from 'reactstrap';
import { useForm } from '@formspree/react';

const ContactForm = () => {
  const [submit, handleSubmit] = useForm(`${process.env.FORMSPREE_ID}`);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validate={(values) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        if (!values.name) {
          errors.name = 'Name Required';
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = 'Valid Email Required';
        }
        if (!values.message) {
          errors.message = 'Message Required';
        }
        return errors;
      }}
    >
      {() => (
        <Form>
          <div className="mb-4">
            <Label for="name">Name: </Label>
            <Field name="name" id="name" className="form-control" />
            <ErrorMessage name="name" component={FormFeedback} />
          </div>

          <div className="mb-4">
            <Label for="email">Email: </Label>
            <Field name="email" id="email" className="form-control" />
            <ErrorMessage name="email" component={FormFeedback} />
          </div>

          <div className="mb-4">
            <Label for="message">Message: </Label>
            <Field name="message" component="textarea" id="message" className="form-control" style={{ minHeight: '230px' }} />
            <ErrorMessage name="message" component={FormFeedback} />
          </div>

          <Button type="submit" disabled={submit.submitting}>
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
