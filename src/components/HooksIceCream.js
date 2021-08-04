import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from './iceCreams/iceCreamActions';
function HooksIceCreamContainer(){
    const numberOfIcecreams = useSelector(state =>state.iceCream.numberOfIcecreams)
    const dispatch = useDispatch();
    return(
        <>
        <h1>Number of Icecreams:{numberOfIcecreams}</h1>
        <button onClick={()=>dispatch(buyIceCream())}>BuyIcecream</button>
        </>

    )
}
export default HooksIceCreamContainer;