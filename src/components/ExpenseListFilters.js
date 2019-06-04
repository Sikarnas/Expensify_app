import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSelectChange = (e) => {
        e.target.value === 'date' 
        ? this.props.sortByDate()
        : this.props.sortByAmount()
    }
    render() {
        return (
            <div className="ui container">
            <div className="input-group">
                <div className="input_group__item ">
                    <input className="text-input" 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                    placeholder="Search expenses"
                    />
                </div>
                <div className="input_group__item">
                        <select 
                            className="select"
                            value = {this.props.filters.sortBy} 
                            onChange={this.onSelectChange}
                            >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                </div>
                <div className="input_group__item">
                    <DateRangePicker
                        startDateId='1'
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        endDateId='365'
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);