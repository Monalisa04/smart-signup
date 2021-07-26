import {useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({
	showError = false,
	error = '',
	classes = '',
}) => {
	const [errorMsg, setErrorMsg] = useState('');
	useEffect(() => {
		setErrorMsg(error);
	}, [error]);

	return (
		<div className={`text-danger font-size-sm${showError ? ' visible' : ' invisible'}${classes ? ` ${classes}` : ''}`}>
			{errorMsg}
		</div>
	);
};

export default ErrorMessage;

ErrorMessage.propTypes = {
	showError: PropTypes.bool,
	error: PropTypes.string.isRequired,
	classes: PropTypes.string,
};

ErrorMessage.defaultProps = {
	showError: false,
	classes: '',
};