import { useState, useEffect } from 'react';

import emailJS from 'emailjs-com';

const useForm = (callback, validate) => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		subject: '',
		emailText: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(validate(values));

		setIsSubmitting(true);

		// REFACTOR THIS LATER ON !!! Function sending emails via EmailJS library.
		emailJS
			.sendForm(
				'gmail',
				'template_audqxh6',
				e.target,
				'user_8UJgVe3ZqmUs6G0OJpwzi'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
