import {
    CREATE_CATEGORY,
    GET_CATEGORIES,
    DELETE_CATEGORY,
    FILTER_BY_CATEGORY
} from '../actions/types'


export default (state = {categories: []}, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {categories: action.payload}
        case CREATE_CATEGORY:
            return {...state, categories: [...state.categories, action.payload]}
        case DELETE_CATEGORY:
            const removeDeletedCategory = state.categories.filter(category => category.id != action.payload)
            return {categories: removeDeletedCategory}
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

