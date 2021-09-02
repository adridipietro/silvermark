import { combineReducers } from "redux"
import bookmarkReducer from "./bookmarkReducer"
import categoryReducer from "./categoryReducer"

const rootReducer = combineReducers({
  bookmarks: bookmarkReducer,
  categories: categoryReducer
})

export default rootReducer