import axios from "axios";

export const FETCH_PIZZA = 'FETCH_PIZZA';

export const fetchPizza = (category, sortBy) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://my-temp-json-serv.herokuapp.com/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`);
            dispatch({type: FETCH_PIZZA, payload: response.data});
        } catch (e) {
            throw e;
        }
    }
}
