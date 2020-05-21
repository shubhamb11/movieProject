import { ADD_TO_CART, FILTER_CATEGORY, DECREASE_QUANTITY, REMOVE_PRODUCT } from './actionTypes';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id: id,
    }
}

export const filterCats = (type) => {
    return {
        type: FILTER_CATEGORY,
        cat: type,
    }
}

export const decreaseQuantity = (id) => {
    return {
        type: DECREASE_QUANTITY,
        id: id,
    }
}

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id: id,
    }
}
