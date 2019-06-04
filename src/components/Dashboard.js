import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary'

const Dashboard = (props) => (
    <div>
        <ExpenseSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default Dashboard