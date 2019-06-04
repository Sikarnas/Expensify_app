import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses'

export class Edit extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id,expense)
        this.props.history.push('/dashboard')
    }
    onClick = () => {
        this.props.startRemoveExpense(this.props.expense.id)
            this.props.history.push('/dashboard')
     }
     
    render() {
        return (
            <div className="ui container">
             <h1 className="page-header__title">Edit expense</h1>        
                <div className="edit">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <div className="remove">
                        <button onClick={this.onClick} className="ui red button">Remove</button>
                    </div>
                </div>
                
            </div>
         )
    }   
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id,expense)),
        startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit)