import { cleanup, render, screen, waitFor }from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Formik } from 'formik';
import FormikTextInput from '../../common/formik-text-input';
import * as validationHelper from '../../helpers/validation';

const validateHandler = values => {
	const errors = {};
	if (!validationHelper.validateRequiredField(values.name)) {
	  errors.name = 'Name is required';
	}
	return errors;
};
const submitHandler = jest.fn();
const mockForm = (
	<Formik
		initialValues={{ name: '' }}
		validate={validateHandler}
		onSubmit={submitHandler}
	>
		<Form>
			<FormikTextInput label="Name:" id="name" name="name" type="text" required/>
			<button type="submit">Submit</button>
		</Form>
	</Formik>
);

const renderInput = () => {
	render(mockForm);
}
describe("FormikTextInput component should", () => {
	afterEach(cleanup);

	it("render input elment", () => {
		renderInput();

		const formikInput = screen.getByLabelText(/Name:/i);
		expect(formikInput).toBeInTheDocument();
	});

	it("update the input's underlying value", async () => {
		renderInput();


		const formikInput = screen.getByLabelText(/Name:/i);
		userEvent.type(formikInput, 'John');

		await waitFor(() => {
			expect(formikInput.value).toBe("John");
		});
	});

	describe("render label", () => {
		it("render input elment with label", () => {
			renderInput();

			const formikInput = screen.getByLabelText(/Name:/i);
			expect(formikInput).toBeInTheDocument();

			const formikInputLabel = screen.getByText(/Name:/i);
			expect(formikInputLabel).toBeTruthy();
		});

		it("render input elment without label", () => {
			const validateHandler = jest.fn();
			const submitHandler = jest.fn();
			const { container } = render(
				<Formik
					initialValues={{ name: '' }}
					validate={validateHandler}
					onSubmit={submitHandler}
				>
					<Form>
						<FormikTextInput id="name" name="name" type="text" />
					</Form>
				</Formik>
			);

			const screenLabel = container.querySelector('label');
			expect(screenLabel).toBe(null);
		});
	});

	describe("render required", () => {
		it("render required if required prop is passed", () => {
			renderInput();

			const requiredElement = screen.getByText("*");
			expect(requiredElement).toHaveClass('text-danger d-block');
		});

		it("render without required if required prop is not passed", () => {
			const validateHandler = jest.fn();
			const submitHandler = jest.fn();
			render(
				<Formik
					initialValues={{ name: '' }}
					validate={validateHandler}
					onSubmit={submitHandler}
				>
					<Form>
						<FormikTextInput label="Name:" id="name" name="name" type="text" />
					</Form>
				</Formik>
			);

			const requiredElement = screen.getByText("*");
			expect(requiredElement).toHaveClass('text-danger d-none');
		});
	});

	describe("render error message", () => {
		it("render error message for invalid input", async () => {
			renderInput();
			userEvent.click(screen.getByRole('button', {name: /submit/i}))

			await waitFor(() => {
				const errorMessage = screen.getByText(/Name is required/i);
				expect(errorMessage).toHaveClass("text-danger visible");
			});
		});

		it("render without error message for valid input", async () => {
			renderInput();

			const formikInput = screen.getByLabelText(/Name:/i);
			userEvent.type(formikInput, 'John');
			userEvent.click(screen.getByRole('button', {name: /submit/i}))

			await waitFor(() => {
				const errorMessage = screen.getByText(/no error/i);
				expect(errorMessage).toBeInTheDocument();
			});
		});
	});
});