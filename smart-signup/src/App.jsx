import UserSignup from "./features/user-signup/user-signup";
import './assets/styles/app.scss';

const App = () => {
  return (
	<div className="app rounded">
		<div className="app-content">
			<UserSignup />
		</div>
	</div>
  );
}

export default App;
