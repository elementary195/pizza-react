export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PLUS_ITEM = 'PLUS_ITEM';
export const MINUS_ITEM = 'MINUS_ITEM';

export const addToCart = (pizzaObj) => {
    return {type: ADD_TO_CART, payload: pizzaObj}
}

export const clearCart = () => {
    return {type: CLEAR_CART}
}

export const removeFromCart = (id) => {
    return {type: REMOVE_FROM_CART, payload: id};
}

export const plusCartItem = (id) => {
    return {type: PLUS_ITEM, payload: id};
}

export const minusCartItem = (id) => {
    return {type: MINUS_ITEM, payload: id};
}
