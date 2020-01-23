import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Button, Comment, Form, Header} from 'semantic-ui-react'
import * as actionCreator from '../store/actions'


function MessageContainer(props){
    
    
    const {userData,userMessages, userConversations}= useSelector(state => state)
    const dispatch = useDispatch()
    const c = ()=>{
        dispatch(actionCreator.convos(localStorage.token))
    }

    useEffect(()=>{dispatch(actionCreator.convos(localStorage.token))},[])


    return(
        <>
        <h1 onClick={c}>message compnent</h1>
        {}
        <Comment.Group>
        

        </Comment.Group>
        
        </>
    )
} 

export default MessageContainer


