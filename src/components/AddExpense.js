import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

export class AddExpense extends React.Component { 
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense))
        this.props.startAddExpense(expense)
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="ui container">
                        <h1 className="page-header__title">Add expense</h1>        
                    </div>
                </div>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
             </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpense);