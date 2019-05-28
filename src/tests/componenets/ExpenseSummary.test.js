import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary'

test('should correctly render expensesSummary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={512}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render expensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={11} expensesTotal={5544512}/>)
    expect(wrapper).toMatchSnapshot()
})