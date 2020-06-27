const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expanse) => {
                if (expanse.id === action.id) {
                    return {
                        ...expanse,
                        ...action.updates
                    }
                } else {
                    return expanse;
                }
            });
        default:
            return state;
    }
}

export default expensesReducer;