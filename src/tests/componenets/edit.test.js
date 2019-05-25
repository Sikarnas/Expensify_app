import React from 'react';
import {shallow} from 'enzyme';
import {Edit} from '../../components/Edit';
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
     editExpense = jest.fn();
     removeExpense = jest.fn();
     history = {push: jest.fn()}
     wrapper = shallow(
     <Edit 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history}
        expense={expenses[2]}
     />) 
})

test('should render Edit page', () => {
expect(wrapper).toMatchSnapshot()
})

test('should  handle edit ', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
})

test('should  handle remove ', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id)
})