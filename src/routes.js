
import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import HomePage from './components/containers/HomePage';
import Terms from './components/Terms';
import BenefitPage from './components/containers/BenefitPage';
import CategoryPage from './components/containers/CategoryPage';


const Routes = () => {
    return (
        <div>
        <Switch>
            <Route path="/terms" component={Terms} />
            <Route path="/benefit/:id" component={BenefitPage}/>
            <Route exact path="/category/:id" component={CategoryPage} />
            <Route exact path="/" component={HomePage} />
            <Redirect path="*" to="/"/>
        </Switch>
        </div>
    );
};

export default Routes;
  
