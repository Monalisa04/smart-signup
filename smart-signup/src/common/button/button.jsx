import PropTypes from 'prop-types';

const Button = ({
	label,
	title,
	clickHandler,
	classes,
	type,
}) => (
	<button
		type={type}
		className={`btn ${classes ? ` ${classes}` : ''}`}
		{...type !== 'submit' ? {onClick: clickHandler} : {}}
		title={title}
	>
		{label}
	</button>
);

export default Button;

Button.propTypes = {
	label: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	clickHandler: PropTypes.func,
	classes: PropTypes.string,
	type: PropTypes.string,
};

Button.defaultProps = {
	clickHandler: () => {},
	classes: '',
	type: 'button',
};