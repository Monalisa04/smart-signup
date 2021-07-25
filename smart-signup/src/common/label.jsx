import PropTypes from 'prop-types';
const Label = ({
	label,
	htmlFor,
	classes = '',
	...props
}) => (<label htmlFor={htmlFor} className={`form-label${classes ? ` ${classes}` : ''}`} {...props}>{label}</label>);

export default Label;

Label.propTypes = {
	label: PropTypes.string.isRequired,
	htmlFor: PropTypes.string.isRequired,
	classes: PropTypes.string,
};

Label.defaultProps = {
	classes: '',
};