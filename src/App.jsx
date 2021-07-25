import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { AuthProvider } from './contexts/authContext';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/signup' component={SignUp} />
					<Route path='/login' component={Login} />
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
