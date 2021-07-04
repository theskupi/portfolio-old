import { useField } from 'formik';

import React from 'react';
import { Input } from 'reactstrap';

const FormikInput = (props) => {
  const [field, meta] = useField(props.name);
  const hasError = !!meta.error;

  return (
    <Input
      {...props}
      {...field}
      error={hasError}
      helperText={meta.error}
    />
  );
};

export default FormikInput;
