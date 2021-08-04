import { BUY_CAKE } from "./cakeTypes"
const initialState = {
    numberofCakes:10
}
function cakeReducer(state=initialState,action){
    switch(action.type){
        case BUY_CAKE:{
            return {
                ...state,
                numberofCakes:state.numberofCakes-1
            }
        }
        default:{
            return state;
        }
    }
}
export default cakeReducer;