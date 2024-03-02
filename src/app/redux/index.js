import { combineReducers } from "redux";
import { getAllUserReducer } from "./Admin/manage user/Reducer/userReducer";
export const reducers = combineReducers({
userGet:getAllUserReducer,
});