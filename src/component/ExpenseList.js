import React from 'react';
import { connect } from 'react-redux';
import selectExpense from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
    <div>
        <h2>Page Expense List</h2>
        {props.expenses.map(expense => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapStateProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
    }
}

export default connect(mapStateProps)(ExpenseList);


