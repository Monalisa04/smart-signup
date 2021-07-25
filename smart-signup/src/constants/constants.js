export const FORM_FIELD_TYPES = {
	TEXT: 'text',
	EMAIL: 'email',
	PASSWORD: 'password',
	CHECKBOX: 'checkbox'
};

export const ACTION_TYPES = {
	USER_INFO_SUCCESS: 'USER_INFO_SUCCESS',
	USER_PRIVACY_SUCCESS: 'USER_PRIVACY_SUCCESS',
	USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
};

export const SUCCESS_MESSAGE = 'Please verify your email address, you should have received an email from us already!';

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,}$/;