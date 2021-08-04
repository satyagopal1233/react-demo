import React from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { buyCake } from './cake/cakeActions';

function HooksCakeContainer(){
     const numberofCakes =   useSelector(state => state.cake.numberofCakes);
     const dispatch = useDispatch();

    return(
        <div>
            <h1>Num of cakes:{numberofCakes}</h1>
            <button onClick={() =>dispatch(buyCake())}>Buy cake</button>
        </div>
    );
}
export default HooksCakeContainer;