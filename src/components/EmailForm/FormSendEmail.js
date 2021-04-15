import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSendEmail = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Contact.</h1>
        <h2>Get in touch with us today!</h2>
        <h2>
          If you've already decided that you want to embrace our services - just
          write to us! We will be more than happy to answer all of your
          questions.
        </h2>
        <div className="form-inputs">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your name"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Subject</label>
          <input
            className="form-input"
            type="text"
            name="subject"
            placeholder="Enter your subject of enquiry"
            value={values.subject}
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Message</label>
          <input
            className="form-textarea"
            type="text"
            name="emailText"
            placeholder="Enter your message"
            value={values.emailText}
            onChange={handleChange}
          />
          {errors.emailText && <p>{errors.emailText}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormSendEmail;
