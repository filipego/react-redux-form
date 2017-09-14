import React from 'react'
import { Field, reduxForm } from 'redux-form'


const submit = (values) => {
  console.log('sumbit inside form')
  console.log(values)
}

const renderField = ({ label, input, type, meta: { touched, error } }) => (
  <div className="input-row">
    <label>{label}</label>
    <br />
    <input {...input} type={type}/>
    {touched && error &&
     <span className="error">{error}</span>}
  </div>
)

let ContactForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={ handleSubmit(submit) }>
        <Field name="firstName" label="First Name" component={renderField} type="text" />
        <Field name="lastName" label="First Name" component={renderField} type="text" />
        <Field name="email" label="Email" component={renderField} type="email" />
        <button type="submit">Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
