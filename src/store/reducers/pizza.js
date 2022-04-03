import {FETCH_PIZZA} from "../actions/pizza";

const initialState = {
    items: [],
}

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PIZZA: {
            return {
                ...state, items: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default pizzaReducer;
