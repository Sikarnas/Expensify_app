import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm with values', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submition', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change', {
      target: {value}  
    })
    expect (wrapper.state('description')).toBe(value);
})

test('should set note on area change', () => {
    const value = 'new note'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change', {
      target: {value}  
    })
    expect (wrapper.state('note')).toBe(value);
})

test('should set amount', () => {
    const value = '35.50'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
      target: {value}  
    })
    expect (wrapper.state('amount')).toBe(value);
})

test('should not set amount', () => {
    const value = '35.505'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
      target: {value}  
    })
    expect (wrapper.state('amount')).toEqual('');
})

test('should call onSubmit prop for valid submition', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: 'gum',
        note: '',
        amount: 195,
        createdAt: 0
    })
})

test('should set new date onDateChange', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should change focused prop', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused: true})
    expect(wrapper.state('calendarFocused')).toEqual(true)
})

