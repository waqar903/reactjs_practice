// all reducer should be import here
import changeTheNumber  from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber:changeTheNumber,
    // changeBG
})
export default rootReducer; // now it will be added to store