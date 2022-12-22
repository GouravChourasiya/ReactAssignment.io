import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import { Text,Card,Spacer,Button,Row} from '@nextui-org/react';
import { deletepost ,updateLike} from '../Redux/reducer/postSlice';
import {BiLike} from 'react-icons/bi'


export const ViewBlog = () => {
    // Using Useparams  Function to get  the ID 
    let userId = useParams();
    // Using UseSelector to get the state data from REdux Store
    const data = useSelector((state) => state.items.find(item=> item.id === userId.id));

//    Dispatch function to dispatch the data to redux store
    const dispatch = useDispatch();
    // Navigate functio to navigate through other urls
    const navigate = useNavigate();
    // get the like data from redux store to increase by 1 when user clicked the buttons
    var userlike = data.Like;
    // Using use state to passing the data to the reducers
    const [updatelike]= useState({
        id:userId.id,
        Like:userlike+1
    })
// Redirect to home function to navigate to the home
    const RedirectToHome=()=>{
        navigate("/");
    }

  return (
    <div>
        {/* card Start from herer */}
        <Card  css={{ w:"50%", h: "400px",marginLeft:"auto" ,
    marginRight:"auto",top:"10vh"
    }}>
        {/* spacer to giving spaces */}
        <Spacer y={1} />
        <Row>
            {/* Back Button */}
         <Button shadow auto color={'gradient'}
         onClick={()=> RedirectToHome()}
            >Back</Button>
            {/* Back Buttons Ends here */}
           <Spacer x={1}/>

        {/*  Delete Button*/}
        <Button  shadow auto color={'error'}
          onClick={()=> dispatch(deletepost(userId.id))} 
          onPress={()=>RedirectToHome()}>Delete </Button>
          {/* Delete buttons End here */}
           <Spacer x={1}/>
           {/* Update Button to update passing with id */}
        <Link to={'/update/'+userId.id}><Button  shadow auto color={'secondary'}
           >Update </Button></Link>
           {/* Update buttons ENd here */}
        <Spacer x={1}/>
        {/* Like button On click It Send data to updateLike Reducer */}
        <Button  shadow auto color={'primary'}
           iconRight={<BiLike/>} 
           onPress={()=>dispatch(updateLike({...updatelike}))}
            >Like </Button>

            <Spacer x={1}/>

            {/* GEtting Like Data */}
            <Button  flat auto color={'primary'}>Like:  {data.Like}</Button>
        

          </Row>

           <Spacer y={1}/>
           {/* Showing Datas */}
        <Text h1 color='secondary'>Title: {data.title}</Text>
        <Text h1 color='warning'>category: {data.category}</Text>
        <Text h1 color='error'>Description :{data.description}</Text>
        </Card>
    </div>
  )
}
