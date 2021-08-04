import React from 'react';
import { buyCake } from './cake/cakeActions';
import { connect } from 'react-redux';

function CakeContainer(props){
    return(
        <>
        <h2>Number of cakes:{props.numberofCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
        </>

    )
   
}
const mapStateToProps = state =>{
    return{
        numberofCakes:state.cake.numberofCakes 
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake:() => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);