import { BUY_ICECREAM } from "./iceCreamsTypes";

const initialIceCreamState = {
    numberOfIcecreams:10
}
function IceCreamReducer(state = initialIceCreamState,action){
    switch(action.type){
        case BUY_ICECREAM:{
            return {
                ...state,
                numberOfIcecreams:state.numberOfIcecreams-1
            }
        }    
        default: {
                return state
            }
        }
    
}
export default IceCreamReducer;