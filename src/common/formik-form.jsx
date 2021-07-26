import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import FormikTextInput from './formik-text-input';
import { FORM_FIELD_TYPES } from '../constants/constants';
import FormikCheckbox from './formik-checkbox';
import Button from '../common/button/button';

const FormikForm = ({
	fields,
	initialValues,
	submitHandler,
	cancelHandler,
	validationHandler,
}) => {
	const getInputField = field => (<FormikTextInput {...field} />);

	const getCheckboxField = field => (<FormikCheckbox {...field} />);

	const getFormField = (field) => {
		const { type } = field;
		switch (type){
			case FORM_FIELD_TYPES.TEXT:
			case FORM_FIELD_TYPES.PASSWORD:
			case FORM_FIELD_TYPES.EMAIL:
				return getInputField(field);
			case FORM_FIELD_TYPES.CHECKBOX:
				return getCheckboxField(field);
			default:
				getInputField(field);
				return;
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validate={validationHandler}
			onSubmit={submitHandler}
		>
			<Form>
				<div className="mb-4">
					{fields.map(field => (
						<Fragment key={field.name}>
							{getFormField(field)}
						</Fragment>
					))}
				</div>
				<div className="d-flex justify-content-end">
					<Button
						label="Back"
						title="Back"
						clickHandler={cancelHandler}
						classes="btn-secondary mx-1"
					/>
					<Button
						label="Next"
						title="Next"
						type="submit"
						classes="btn-primary mx-1"
					/>
				</div>
			</Form>
		</Formik>
	);
};

export default FormikForm;

FormikForm.propTypes = {
	fields: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
	})).isRequired,
	initialValues: PropTypes.shape({}),
	submitHandler: PropTypes.func.isRequired,
	cancelHandler: PropTypes.func.isRequired,
	validationHandler: PropTypes.func.isRequired
};