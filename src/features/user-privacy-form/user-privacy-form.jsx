import React, { useContext } from 'react';
import FormikForm from '../../common/formik-form';
import { ACTION_TYPES, FORM_FIELD_TYPES } from '../../constants/constants';
import { UserContext } from '../user-signup/user-signup';

const UserPrivacyForm = () => {
	const { dispatch } = useContext(UserContext);
	const formFields = [
		{
			type: FORM_FIELD_TYPES.CHECKBOX,
			name: 'productUpdates',
			id: 'productUpdates',
			label: 'Receive updates about Tray.io product by email',
		},
		{
			type: FORM_FIELD_TYPES.CHECKBOX,
			name: 'otherUpdates',
			id: 'otherUpdates',
			label: 'Receive communication by email for other products created by the Tray.io team',
		},
	];
	const initialValues= {
		productUpdates: false,
		otherUpdates: false,
	};

	const onFormSubmit = values => {
		dispatch({
			type: ACTION_TYPES.USER_PRIVACY_SUCCESS,
			data: values,
		});
	};

	return (
		<FormikForm
			initialValues={initialValues}
			fields={formFields}
			validationHandler={() => {}}
			cancelHandler={() => {}}
			submitHandler={onFormSubmit}
			onCancel={() => {}}
		/>
	);
};

export default UserPrivacyForm;