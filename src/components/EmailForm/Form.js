import React, { useState } from "react";
import "./Form.css";
import FormSendEmail from "./FormSendEmail";
import FormEmailSuccess from "./FormEmailSuccess";
import ImgMailbox from "../../images/img-mailbox.svg";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div id="contactForm" className="form-container">
        <div className="form-content-left">
          <img className="form-img" src={ImgMailbox} alt="mailbox" />
        </div>
        {!isSubmitted ? (
          <FormSendEmail submitForm={submitForm} />
        ) : (
          <FormEmailSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
