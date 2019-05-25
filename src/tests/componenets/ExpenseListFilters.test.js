import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, filters2} from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setEndDate = jest.fn()
    setStartDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
    />)
}) 

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with data', () => {
    wrapper.setProps({
       filters: filters2 
    })
    expect(wrapper).toMatchSnapshot()
})

test('should render text change', () => {
    const value = 'test'
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    })
    expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: filters2 
     })
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.setProps({
        filters: filters2 
     })
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should render date changes', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})