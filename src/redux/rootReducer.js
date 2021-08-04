import { combineReducers } from "redux";
import cakeReducer from "../components/cake/cakeReducer";
import IceCreamReducer from "../components/iceCreams/IceCreamReducer";
import userLibraryReducer from "../components/userLibrary/userLibraryReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer,
    userLibrary: userLibraryReducer
})
export default rootReducer;