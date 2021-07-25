import React from 'react';	
import { cleanup, render, screen } from '@testing-library/react';
import Label from '../../common/label';

describe.only('Label component should', () => {
	afterEach(cleanup);

	it('display a label', () => {
		render(
			<>
				<Label htmlFor="user-name" label="User Name:" />
				<input id="user-name" />
			</>
		);
		const screenLabel = screen.getByText(/User Name:/i);
		expect(screenLabel).toBeInTheDocument();
	})

	it('render "for" attribute', () => {
		render(
			<>
				<Label htmlFor="user-name" label="User Name:" classes="mb-0" />
				<input id="user-name" />
			</>
		);
		const screenLabel = screen.getByText(/User Name:/i);
		expect(screenLabel).toHaveAttribute('for', 'user-name');
	});

	it('display a label with custom CSS', () => {
		render(
			<>
				<Label htmlFor="user-name" label="User Name:" classes="mb-0" />
				<input id="user-name" />
			</>
		);
		const screenLabel = screen.getByText(/User Name:/i);
		expect(screenLabel).toHaveClass("mb-0");
	});
});