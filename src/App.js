import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
            </Switch>
        </div>
    );
}

export default App;