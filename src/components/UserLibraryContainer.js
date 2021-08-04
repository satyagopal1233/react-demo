import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchUserLibrary } from './userLibrary/userLibraryActions';

function UserLibraryContainer({userData,fetchUserLibrary}) {
   
    useEffect(() => {
        console.log("in useEffect");
        fetchUserLibrary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <>
        <h2>User List:</h2>
        </>

    )
   
}
const mapStateToProps = state =>{
    return{
        userData:state.userLibrary
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchUserLibrary:() => dispatch(fetchUserLibrary())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserLibraryContainer);