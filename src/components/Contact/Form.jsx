// import React from 'react';
// import axios from 'axios';
// import { Formik, Form, FastField, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// // import { url } from 'data/config';
// import { Button, Input, InputGroup } from 'reactstrap';
// import { Error } from './style';

// const ContactForm = () => {
//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         message: '',
//         recaptcha: '',
//         success: false,
//       }}
//       validationSchema={Yup.object().shape({
//         name: Yup.string().required('Full name field is required'),
//         email: Yup.string()
//           .email('Invalid email')
//           .required('Email field is required'),
//         message: Yup.string().required('Message field is required'),
//         recaptcha:
//           process.env.NODE_ENV !== 'development'
//             ? Yup.string().required('Robots are not welcome yet!')
//             : Yup.string(),
//       })}
//       onSubmit={async (
//         { name, email, message },
//         { setSubmitting, resetForm, setFieldValue }
//       ) => {
//         try {
//           await axios({
//             method: 'POST',
//             url: 'http://localhost:3000/api/contact',
//             // process.env.NODE_ENV !== 'development'
//             //   ? `${url}/api/contact`
//             //   : 'http://localhost:3000/api/contact',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             data: JSON.stringify({
//               name,
//               email,
//               message,
//             }),
//           });
//           setSubmitting(false);
//           setFieldValue('success', true);
//           setTimeout(() => resetForm(), 6000);
//         } catch (err) {
//           setSubmitting(false);
//           setFieldValue('success', false);
//           alert('Something went wrong, please try again!');
//         }
//       }}
//     >
//       {({ values, touched, errors, setFieldValue, isSubmitting }) => (
//         <Form>
//           <InputGroup>
//             <Input
//               as={FastField}
//               type="text"
//               name="name"
//               component="input"
//               aria-label="name"
//               placeholder="Full name*"
//               error={touched.name && errors.name}
//             />
//             <ErrorMessage component={Error} name="name" />
//           </InputGroup>
//           <InputGroup>
//             <Input
//               id="email"
//               aria-label="email"
//               component="input"
//               as={FastField}
//               type="email"
//               name="email"
//               placeholder="Email*"
//               error={touched.email && errors.email}
//             />
//             <ErrorMessage component={Error} name="email" />
//           </InputGroup>
//           <InputGroup>
//             <Input
//               as={FastField}
//               component="textarea"
//               aria-label="message"
//               id="message"
//               rows="8"
//               type="text"
//               name="message"
//               placeholder="Message*"
//               error={touched.message && errors.message}
//             />
//             <ErrorMessage component={Error} name="message" />
//           </InputGroup>

//           {values.success && (
//             <InputGroup>
//               <h4>
//                 Your message has been successfully sent, I will get back to you
//                 ASAP!
//               </h4>
//             </InputGroup>
//           )}
//           <Button type="submit" disabled={isSubmitting}>
//             Submit
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default ContactForm;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormFeedback, Label } from 'reactstrap';

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
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
          <Field name="message" component="textarea" id="message" className="form-control" style={{minHeight: "230px"}} />
          <ErrorMessage name="message" component={FormFeedback} />
        </div>

        <Button type="submit">Send</Button>
      </Form>
    )}
  </Formik>
);
