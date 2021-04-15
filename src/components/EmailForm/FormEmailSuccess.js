import React from "react";
import "./Form.css";
import ImgSuccess from "../../images/img-message-sent.svg";

const FormEmailSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your email!</h1>
      <img className="form-img-2" src={ImgSuccess} alt="success-image" />
    </div>
  );
};

export default FormEmailSuccess;
