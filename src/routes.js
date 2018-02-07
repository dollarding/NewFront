
import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import HomePage from './components/containers/HomePage';
import Terms from './components/Terms';
import DetailedBenefit from './components/containers/DetailedBenefit';

const Routes = () => {
    return (
    <Router>
        <Switch>
            <Route path="/terms" component={Terms} />
            <Route path="/benefit/:id" component={DetailedBenefit}/>
            <Route exact path="/" component={HomePage} />
            <Redirect path="*" to="/"/>
        </Switch>
    </Router>
    );
};

export default Routes;
  
