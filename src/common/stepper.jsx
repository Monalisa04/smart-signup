import PropTypes from 'prop-types';
import classNames from 'classnames';

const Stepper = ({
	steps,
	classes = '',
	stepClickHandler,
}) => {
	return (
		<div className={`stepper${classes ? ` ${classes}` : ''}`}>
			{steps.map(step => {
				const {
					identifier = '',
					label = '',
					order = 0,
					active = false,
					done = false,
				} = step;

				const stepClasses = classNames(
					'step',
					{
						active,
						done,
					},
				);
				return (
					<div className={stepClasses} key={identifier}>
						<div
							className="circle"
							role="presentation"
							{...typeof stepClickHandler === 'function'
								? { onClick: stepClickHandler }
								: {}
							}
						>
							<b>
								{order}
							</b>
						</div>
						<div className="title">{label}</div>
						<div className="line-left" />
						<div className="line-right" />
					</div>
				);
			})}
		</div>
	);
};

export default Stepper;

Stepper.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.shape({
		identifier: PropTypes.shape,
		label: PropTypes.string,
		order: PropTypes.number,
		active: PropTypes.bool,
		done: PropTypes.bool,
	})),
	classes: PropTypes.string,
	stepClickHandler: PropTypes.func,
};

Stepper.defaultProps = {
	steps: [{
		identifier: '',
		label: '',
		order: 0,
		active: false,
		done: false,
	}],
	classes: '',
	stepClickHandler: () => {},
};
