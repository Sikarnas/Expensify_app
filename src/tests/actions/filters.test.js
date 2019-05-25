import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should return set filter object', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should return default set filter object', () => {
    const action = setTextFilter('balls')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'balls'
    })
})

test('should return sort by amount object', () => {
    const action = sortByAmount('balls')
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})

test('should return sort by date object', () => {
    const action = sortByDate('balls')
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})