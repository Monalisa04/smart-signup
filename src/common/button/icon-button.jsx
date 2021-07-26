import PropTypes from 'prop-types';

const IconButton = ({
	label,
	title,
	icon,
	clickHandler,
	classes,
	type,
}) => (
	<button
		type={type}
		className={`btn btn-flat ${classes ? ` ${classes}` : ''}`}
		onClick={clickHandler}
		title={title}
	>
		<i className={`fas ${icon}`} />
		{label}
	</button>
);

export default IconButton;

IconButton.propTypes = {
	label: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
	classes: PropTypes.string,
	type: PropTypes.string,
};

IconButton.defaultProps = {
	classes: '',
	type: 'button',
};