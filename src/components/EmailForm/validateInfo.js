// import { useTranslation } from "react-i18next";
// const { t } = useTranslation();

export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Name required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  // if (!values.email) {
  //   errors.email = "Email required";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "Email address is invalid";
  // }
  // if (!values.subject) {
  //   errors.subject = "Subject is required";
  // } else if (values.subject.length < 10) {
  //   errors.subject = "Subject needs to be 10 characters or more";
  // }
  // if (!values.emailText) {
  //   errors.emailText = "Email content is required";
  // } else if (values.emailText.length < 10) {
  //   errors.emailText = "Email content needs to be 10 characters or more";
  // }

  if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correct email address is required";
  }
  if (!values.subject || values.subject.length < 10) {
    errors.subject =
      "Correct subject address is required with 6 characters or more";
  }
  if (!values.emailText || values.emailText.length < 6) {
    errors.emailText = "Email content is required with 6 characters or more";
  }

  return errors;
}
