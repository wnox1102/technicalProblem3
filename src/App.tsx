import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignInPage from './pages/sign-in';
import InformationPage from './pages/information';
import HomePage from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/sign-in">
          <div className="flex flex-row w-full min-h-screen justify-center items-center">
            <SignInPage />
          </div>
        </Route>
        <PrivateRoute path="/information" exact>
          <InformationPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
