import React from "react";
import { Form, Field } from "react-final-form";
import { required, mustBeEmail, atLeastFiveCharacters } from "./validators";

export const composeValidators = (...validators) => value => {
  return validators.reduceRight((error, validator) => {
    return error || validator(value);
  }, false);
};

// The callback with in the reduce function is used to write the custom return logic
// For the required purpose on the composer. Line 7

// Here false is passed in to use as the error argument on the first call.
// We do this because the reduce function will use the first argument in the array,
// a function in our case, and these a function will represent error and therefore
// a function will be returned which is no right.

const FormExercise = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <p>
          <Field
            name="email"
            component={Input}
            type="text"
            placeholder="Email"
            validate={composeValidators(mustBeEmail, required)}
          />
          <br />
          Task: validate with required and must be an email
        </p>
        <p>
          <Field
            name="password"
            component={Input}
            type="password"
            placeholder="Password"
            validate={composeValidators(atLeastFiveCharacters, required)}
          />
          <br />
          Task: validate with required and min length 5 characters
        </p>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    )}
  />
);

const onSubmit = () => {};

const Input = ({ input, meta, placeholder, type }) => (
  <React.Fragment>
    <input {...input} type={type} placeholder={placeholder} />
    {meta.error && meta.touched && (
      <span style={{ color: "red" }}>{meta.error}</span>
    )}
  </React.Fragment>
);

export default FormExercise;
