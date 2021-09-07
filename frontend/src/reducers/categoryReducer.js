import {
    CREATE_CATEGORY,
    GET_CATEGORIES,
    DELETE_CATEGORY,
    FILTER_BY_CATEGORY,
    LOADING_CATEGORIES
} from '../actions/types'


export default (state = {categories: [], loading: false}, action) => {
    switch (action.type) {
        case LOADING_CATEGORIES:
            return {
                ...state, 
                categories: [...state.categories],
                loading: true
            }
        case GET_CATEGORIES:
            return {categories: action.payload, loading: false}
        case CREATE_CATEGORY:
            return {...state, categories: [...state.categories, action.payload], loading: false }
        case DELETE_CATEGORY:
            const removeDeletedCategory = state.categories.filter(category => category.id !== action.payload)
            return {categories: removeDeletedCategory, loading: false}
        case FILTER_BY_CATEGORY:
            let value = action.payload.value
            let filteredValues = state.categories.filter(category => {
                return category.name.includes(value)
            })
            return {... state, categories: filteredValues}
        default:
            return state
    }
}

