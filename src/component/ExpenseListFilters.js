import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import { v4 as uuidv4 } from 'uuid';

class ExpenseListFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.filters.text,
            sortBy: props.filters.sortBy,
            startDate: props.filters.startDate,
            endDate: props.filters.endDate,
            calendarFocused: null
        }
    }

    onChangeText = event => {
        event.persist();
        this.setState(() => ({ text: event.target.value }));
        this.props.dispatch(setTextFilter(event.target.value));
    }

    onChangeSortBy = event => {
        event.persist();
        this.setState(() => ({ sortBy: event.target.value }));
        if (event.target.value === 'date') {
            this.props.dispatch(sortByDate());
        } else if (event.target.value === 'amount') {
            this.props.dispatch(sortByAmount());
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.setState(() => ({ startDate }));
        this.setState(() => ({ endDate }));
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.onChangeText}
                />
                <select
                    value={this.state.sortBy}
                    onChange={this.onChangeSortBy}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    // startDate={this.state.startDate}
                    startDate={this.props.filters.startDate}
                    startDateId={uuidv4()}
                    endDate={this.props.filters.endDate}
                    // endDate={this.state.endDate}
                    endDateId={uuidv4()}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateProps)(ExpenseListFilters);