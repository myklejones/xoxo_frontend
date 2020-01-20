import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import {Image, Header} from 'semantic-ui-react'



function User(props){
    
    
    const {userData} = useSelector(state => state)
    const error = useSelector(state => state.errorUpdatingUser)
    console.log(error)
   

    return(
        <>
            <Image src={userData.photo} 
                    
                    size='small'
                    attached='top'
                                              
            />
            <Header as='h1'   attached >
                {userData.username}, {userData.age}
            </Header>
        
        </>
    )
} 

export default User


