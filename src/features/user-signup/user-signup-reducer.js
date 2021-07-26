import { ACTION_TYPES } from "../../constants/constants";

export const userSignupReducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.USER_INFO_SUCCESS:
			return {
				...state,
				userInfo: {
					...action.data,
				},
			};
		case ACTION_TYPES.USER_PRIVACY_SUCCESS:
			return {
				...state,
				privacyInfo: {
					...action.data,
				},
			};
		default:
			return {
				...state,
			};
	}
};