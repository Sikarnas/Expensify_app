import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
})

store.dispatch(addExpense({description: 'water bill', amount: 800, createdAt: 3000}));
store.dispatch(addExpense({description: 'gass bill', amount: 65000, createdAt: 1500}));
store.dispatch(addExpense({description: 'rent', amount: 265000, createdAt: 8000}));
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));


