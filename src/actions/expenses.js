import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
export const addExpense = ({ description = '', note = '', amount = 0, createAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuidv4(),
        description,
        note,
        amount,
        createAt
    }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});