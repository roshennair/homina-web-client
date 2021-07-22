import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { AuthProvider } from './contexts/authContext';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route path='/signup'>
						<SignUp />
					</Route>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
