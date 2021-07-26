import React, { useState, useEffect, createContext, useReducer } from "react";
import Stepper from "../../common/stepper";
import { SIGNUP_PAGES } from "../../config/signup-form-config";
import { userSignupReducer } from "./user-signup-reducer";

export const UserContext = createContext();
const UserSignup = () => {
	const userInitialState = {
		userInfo: null,
		privacyInfo: null,
	};
	const [user, dispatch] = useReducer(userSignupReducer, userInitialState);

	const [signupSteps, setSignupSteps] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		if (user.userInfo || user.privacyInfo) {
			setCurrentPage(prevPage => prevPage + 1);
		}
	}, [user]);

	useEffect(() => {
		const stepperSteps = SIGNUP_PAGES.map((page, index) => {
			const isActive = (index === currentPage);
			const isDone = (index < currentPage);
			return ({
				...page,
				active: isActive,
				done: isDone,
			});
		});
		setSignupSteps(stepperSteps);
	}, [currentPage])

	return (
		<>
			<Stepper steps={signupSteps} />
			<UserContext.Provider
				value={{
					user,
					dispatch,
				}}
			>
				{SIGNUP_PAGES.map((page, index) => ((index === currentPage) ? (
						React.createElement(page.component, { key: page.identifier }, null)
					) : null
				))}
			</UserContext.Provider>
		</>
	)
};

export default UserSignup;