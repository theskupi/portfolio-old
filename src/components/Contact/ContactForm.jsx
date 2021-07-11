import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormFeedback, Label } from 'reactstrap';
import { Schema } from './schema';
import { useForm } from '@formspree/react';

import { cContactForm } from './constants';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [submit, handleSubmit] = useForm(`${process.env.FORMSPREE_ID}`);

  return (
    <Formik
      initialValues={{
        [cContactForm.name]: '',
        [cContactForm.email]: '',
        [cContactForm.message]: '',
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validationSchema={Schema}
    >
      {({
        isSubmitting,
        errors,
        setFieldValue,
        // values,
      }) => (
        <Form>
          {/* <div>
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
          </div> */}
          <div className="mb-2">
            <Label for={cContactForm.name}>Name: </Label>
            <Field name={cContactForm.name} id={cContactForm.name} className="form-control" />
            <ErrorMessage name={cContactForm.name} component={FormFeedback} />
          </div>
          <div className="mb-2">
            <Label for={cContactForm.email}>Email: </Label>
            <Field name={cContactForm.email} id={cContactForm.email} className="form-control" />
            <ErrorMessage name={cContactForm.email} component={FormFeedback} />
          </div>
          <div className="mb-2">
            <Label for={cContactForm.message}>Message: </Label>
            <Field name={cContactForm.message} component="textarea" id={cContactForm.message} className="form-control" style={{ minHeight: '230px' }} />
            <ErrorMessage name={cContactForm.message} component={FormFeedback} />
          </div>
          <ReCAPTCHA sitekey={process.env.RECAPTCHA_KEY} onChange={(value) => setFieldValue(cContactForm.captcha, value)} />

          <Button type="submit" disabled={isSubmitting} className="mt-2">
            Send
          </Button>

          {submit.succeeded && <div>Thank you for your message!</div>}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
