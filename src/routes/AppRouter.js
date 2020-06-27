import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ExpenseDashboardPage from '../component/ExpenseDashboardPage';
import AddExpensePage from '../component/AddExpensePage';
import EditExpensePage from '../component/EditExpensePage';
import HelpPege from '../component/HelpPege';
import NoteFoundPage from '../component/NoteFoundPage';
import Header from '../component/Header';

const Data = props => {
    console.log(props);
    return (
        <p>Test</p>
    )
}

const AppRouter = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPege} />
            <Route path="*" exact={true} component={NoteFoundPage} />
        </Switch>
    </Router>
)

export default AppRouter;
