import React,{useState} from 'react';
import {useSelector} from 'react-redux'



function MessageContainer(props){
    
    
    const user = useSelector(state => state)
    console.log(user)

    return(
        <>
        <h1>message compnent</h1>
        
        </>
    )
} 

export default MessageContainer


