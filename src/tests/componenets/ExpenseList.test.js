import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render paragraph when no expense are found', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
})