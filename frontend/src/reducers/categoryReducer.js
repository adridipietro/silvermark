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
            return {categories: action.payload}
        case DELETE_CATEGORY:
            const categories = state.filter(category => category.id != action.payload)
            return {cateories: categories}
        case FILTER_BY_CATEGORY:
            return {...state}
        default:
            return state
    }
}

