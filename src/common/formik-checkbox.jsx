import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import Label from './label';

const FormikCheckbox = ({
	name,
	id,
	label,
	selected,
	...props
}) => {
	const [field] = useField({name, id, props});
	return (
		<div className="form-check">
			<input
				type="checkbox"
				id={id}
				name={name}
				className="form-check-input"
				{...field}
				{...props}
			/>
			{label && <Label htmlFor={name} classes="form-check-label" label={label} />}
		</div>
	);
};

export default FormikCheckbox;

FormikCheckbox.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	selected: PropTypes.bool,
};

FormikCheckbox.defaultProps = {
	selected: false,
};