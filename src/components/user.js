import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions';
import {Image, Header} from 'semantic-ui-react'
import { editUserProfile } from '../store/actions';



function User({props}){
    
    
    const {userData} = useSelector(state => state)
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorUpdatingUser)
    console.log(props)
   
    const editUserProfile =(evt)=>{
        dispatch(actionCreator.interactingUser(userData))
        props.history.push(`/profile`)
        
    }
    return(
        <>
            <Image src={userData.photo} 
                    
                    size='small'
                    attached='top'
                    onClick={editUserProfile}
                                              
            />
            <Header as='h1'   attached >
                {userData.username}, {userData.age}
            </Header>
        
        </>
    )
} 

export default User


