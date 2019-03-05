import { combineReducers } from "redux";
import { dataReducer } from "./data";

// main reducers
export const reducers = combineReducers({
    data: dataReducer
});
