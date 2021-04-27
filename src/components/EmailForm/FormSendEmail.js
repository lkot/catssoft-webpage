import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

import { useTranslation } from "react-i18next";

const FormSendEmail = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const { t } = useTranslation();

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>{t("EmailFormH1.1")}</h1>
        <h2>{t("EmailFormH2.1")}</h2>
        <h2>{t("EmailFormTextH2.1")}</h2>
        <div className="form-inputs">
          <label className="form-label">{t("EmailFormNameLabel.1")}</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder={t("EmailFormNamePlaceholder.1")}
            value={values.username}
            onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
          {/* {errors.username && <p>{errors.username}</p>} */}
          {/* {errors.username && <p>{t("EmailFormNameValidation.1")}</p>} */}
          {errors.username && <p>{t("EmailFormNameValidation.1")}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">{t("EmailFormEmailLabel.1")}</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder={t("EmailFormEmailPlaceholder.1")}
            value={values.email}
            onChange={handleChange}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
          {/* {errors.email && <p>{errors.email}</p>} */}
          {/* {errors.email && <p>{t("EmailFormEmailValidation.1")}</p>} */}
          {errors.email && <p>{t("EmailFormEmailValidation.1")}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">{t("EmailFormSubjectLabel.1")}</label>
          <input
            className="form-input"
            type="text"
            name="subject"
            placeholder={t("EmailFormSubjectPlaceholder.1")}
            value={values.subject}
            onChange={handleChange}
          />
          {/* {errors.subject && <p>{errors.subject}</p>} */}
          {/* {errors.subject && <p>{errors.subject}</p>} */}
          {/* {errors.subject && <p>{t("EmailFormSubjectValidation.1")}</p>} */}
          {errors.subject && <p>{t("EmailFormSubjectValidation.1")}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">{t("EmailFormMessageLabel.1")}</label>
          <input
            className="form-textarea"
            type="text"
            name="emailText"
            placeholder={t("EmailFormMessagePlaceholder.1")}
            value={values.emailText}
            onChange={handleChange}
          />
          {/* {errors.emailText && <p>{errors.emailText}</p>} */}
          {/* {errors.emailText && <p>{errors.emailText}</p>} */}
          {/* {errors.emailText && <p>{t("EmailFormMessageValidation.1")}</p>} */}
          {errors.emailText && <p>{t("EmailFormMessageValidation.1")}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          {t("EmailFormBtn.1")}
        </button>
      </form>
    </div>
  );
};

export default FormSendEmail;
