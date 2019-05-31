import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard'
import AddExpense from '../components/AddExpense'
import Edit from '../components/Edit'
import Help from '../components/Help'
import NotFound from '../components/NotFound'

import LoginPage from '../components/LoginPage'
import {createBrowserHistory} from 'history'
import PrivateRoute from './PrivateRoute';
export const history = require('history').createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/create" component={AddExpense} />
            <PrivateRoute path="/edit/:id" component={Edit} />
            <Route path="/help" component={Help} />
            <Route component={NotFound} />
        </Switch>
    </div>
    </Router>
)

export default AppRouter

