export const SET_SORT = 'SET_SORT';
export const SET_CATEGORY = 'SET_CATEGORY';

export const setSortBy = (sortObj) => {
    return {type: SET_SORT, payload: {type: sortObj.type, order: sortObj.order}}
}
export const setCategory = (catIndex) => {
    return {type: SET_CATEGORY, payload: catIndex}
}

