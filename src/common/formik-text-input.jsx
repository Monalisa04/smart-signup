import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import Label from './label';
import ErrorMessage from './error-message';

const FormikTextInput = ({
	name,
	id,
	label,
	required,
	...props}) => {
	const [field, meta] = useField({name, id, props});
	const { touched, error } = meta;
	return (
		<div className="form-group">
			<div className="d-flex">
				{label && <Label htmlFor={name} label={label} classes="mb-0" />}
				<span className={`text-danger mx-2${required ? ' d-block' : ' d-none'}`}>*</span>
			</div>
			<input
				id={id}
				name={name}
				className="form-control border-0 border-bottom rounded-0"
				data-testid={id}
				{...field}
				{...props}
			/>
			<ErrorMessage
				showError={error && touched}
				error={error ? error : 'no error'}
				classes="mt-1 mb-2"
			/>
		</div>
	);
};

export default FormikTextInput;

FormikTextInput.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool,
};

FormikTextInput.defaultProps = {
	type: 'text',
	label: '',
	required: false,
};