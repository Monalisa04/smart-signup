import { useContext, useEffect } from "react";
import { SUCCESS_MESSAGE } from "../../constants/constants";
import { UserContext } from "../user-signup/user-signup";

const SignupSuccess = () => {
	const { user } = useContext(UserContext);
	useEffect(() => {
		console.log(JSON.stringify(user));
	}, []);

	return (
		<h5 className="text-success text-center my-4">
			{SUCCESS_MESSAGE}
		</h5>
	);
};

export default SignupSuccess;
