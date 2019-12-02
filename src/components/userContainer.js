import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import User from './user'
import * as actionCreator from '../store/actions'

function UserContainer(props){
    const user = useSelector(state => state.user)
    const token = useSelector(state => state.token)
    const userData= useSelector(state => state.userData)
    const dispatch = useDispatch() 



    
   

    return(
        <>
        <User   />
        </>
    )
} 

export default UserContainer