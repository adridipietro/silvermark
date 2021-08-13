import { combineReducers } from "redux"
import userReducer from "./userReducer"
import bookmarkReducer from "./bookmarkReducer"
import categoryReducer from "./categoryReducer"

const rootReducer = combineReducers({
  user: userReducer,
  bookmark: bookmarkReducer,
  category: categoryReducer
})

export default rootReducer