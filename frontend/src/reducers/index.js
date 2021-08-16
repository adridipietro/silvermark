import { combineReducers } from "redux"
import userReducer from "./userReducer"
import bookmarkReducer from "./bookmarkReducer"
import categoryReducer from "./categoryReducer"

const rootReducer = combineReducers({
  users: userReducer,
  bookmarks: bookmarkReducer,
  categories: categoryReducer
})

export default rootReducer