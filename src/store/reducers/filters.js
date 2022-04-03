import {SET_CATEGORY, SET_SORT} from "../actions/filters";

const initialState = {
    category: null,
    sortBy: {
        type: 'rating',
        order: 'desc',
    },
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT: {
            return {
                ...state, sortBy: action.payload
            }
        }
        case SET_CATEGORY: {
            return {
                ...state, category: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default filtersReducer;
