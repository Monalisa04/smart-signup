import UserInfoForm from '../features/user-info-form/user-info-form';
import UserPrivacyForm from '../features/user-privacy-form/user-privacy-form';
import SignupSuccess from '../features/signup-success/signup-success';
export const SIGNUP_PAGES = [
	{
		identifier: 'PAGE_USER_INFO',
		label: 'User',
		order: 1,
		component: UserInfoForm,
		nextButtonText: 'Next',
	},
	{
		identifier: 'PAGE_USER_PRIVACY',
		label: 'Privacy',
		order: 2,
		component: UserPrivacyForm,
		nextButtonText: 'Next',
	},
	{
		identifier: 'PAGE_DONE',
		label: 'Done',
		order: 3,
		component: SignupSuccess,
		nextButtonText: 'Ok',
	},
];

