import React, { useContext } from 'react';
import FormikForm from '../../common/formik-form';
import { ACTION_TYPES, FORM_FIELD_TYPES } from '../../constants/constants';
import * as validationHelper from '../../helpers/validation';
import { UserContext } from '../user-signup/user-signup';

const UserInfoForm = () => {
	const { dispatch } = useContext(UserContext);
	const formFields = [
		{
			type: FORM_FIELD_TYPES.TEXT,
			name: 'name',
			id: 'name',
			label: 'Name:',
			required: true,
		},
		{
			type: FORM_FIELD_TYPES.TEXT,
			name: 'role',
			id: 'role',
			label: 'Role:',
			required: false,
		},
		{
			type: FORM_FIELD_TYPES.EMAIL,
			name: 'email',
			id: 'email',
			label: 'Email:',
			required: true,
		},
		{
			type: FORM_FIELD_TYPES.PASSWORD,
			name: 'password',
			id: 'password',
			label: 'Password:',
			required: true,
		},
	];
	const initialValues= {
		name: '',
		role: '',
		password: '',
		email: '',
	};

	const validate = values => {
		const errors = {};
		if (!validationHelper.validateRequiredField(values.name)) {
		  errors.name = 'Name is required';
		}
		if (!validationHelper.validateRequiredField(values.email)) {
		  errors.email = 'Email is required';
		} else if (!validationHelper.validateEmailField(values.email)) {
		  errors.email = 'Email address is invalid';
		}
		if (!validationHelper.validateRequiredField(values.password)) {
			errors.password = 'Password is required';
		} else if (!validationHelper.validatePasswordField(values.password)) {
			errors.password = 'Password is invalid. Password should be at least 9 characters long with at least 1 number, 1 uppercase and 1 lowercase character';
		}
		return errors;
	};

	const onFormSubmit = values => {
		dispatch({
			type: ACTION_TYPES.USER_INFO_SUCCESS,
			data: values,
		});
	};

	return (
		<FormikForm
			initialValues={initialValues}
			fields={formFields}
			validationHandler={validate}
			cancelHandler={() => {}}
			submitHandler={onFormSubmit}
			onCancel={() => {}}
		/>
	);
};

export default UserInfoForm;