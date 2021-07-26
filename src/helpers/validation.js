import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/constants";

export const validateRequiredField = inputValue => inputValue ? true : false;

export const validateEmailField = inputValue => {
	const emailRegex = new RegExp(EMAIL_REGEX);
	return emailRegex.test(inputValue);
};

export const validatePasswordField = inputValue => {
	const passwordRegex = new RegExp(PASSWORD_REGEX);
	return passwordRegex.test(inputValue);
};