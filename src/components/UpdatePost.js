import React, { useState } from 'react'
import { Card ,Text,Input, Spacer,Textarea,Button,Link} from '@nextui-org/react';
import {BiArrowBack} from "react-icons/bi"
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {updatepost} from '../Redux/reducer/postSlice'



export const UpdatePost = () => {
    let userId = useParams();
    const dispatch = useDispatch();
    // for getting data
    const data = useSelector((state) => state.items.find(item=> item.id === parseInt(userId.id)));
//  updating the data using usestate
    const [UpdatePost, setUpdatePost] = useState({
        id:parseInt(userId.id),
        title:data.title,
        category:data.category,
        description:data.description,
        Like:0
      })
    //   Changing the form value using handlepost
    const handlePost=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUpdatePost({...UpdatePost,[name]:value})
      }
    //   Ressetting form using reserForm 
      const resetForm=()=>{
    
        setUpdatePost({
          title:"",
        category:"",
        description:""
          });
      }
    //   Alert Function to give alert when the form is submitted
      const Alert=()=>{
        alert("Data Updated succesfully");
      }
     
  return (
    <>
    <form  >
    <Card  css={{ w:"50%", h: "400px",marginLeft:"auto" ,
    marginRight:"auto",top:"10vh"
    }}>
        <Card.Header >
        <Link href="/"> <Button color="gradient" size={"sm"} shadow auto iconRight={<BiArrowBack/>}>
          Back
        </Button></Link>
            <Text b size={"$xl"} color="secondary" css={{
              marginLeft:"30%" ,
              
            }}>Update Post</Text>

          </Card.Header>
          <Scrollbars>
          <Card.Body >
          
        {/* for titile */}
          <Input
          
          bordered
         label='Title'
         name='title'
         value={UpdatePost.title}
        onChange={handlePost}
         placeholder="Enter Title "
          status='secondary'
          color="secondary"
        />
        <Spacer y={1}/>
        {/* for categories  */}
          <Input
          
          bordered
         label='Categories'
          placeholder="Enter Categories"
          name='category'
          status='secondary'
          value={UpdatePost.category}
          onChange={handlePost}

          color="secondary"
        />
        <Spacer y={1}/>
        {/* for Description */}
      
        <Textarea
          bordered
          color="secondary"
          label='Description'
          name='description'
          status='secondary'
          value={UpdatePost.description}
            onChange={handlePost}
          Placeholder="Enter Description"
        />
        
       
          </Card.Body>
          </Scrollbars>
         
          <Card.Footer>
            <Button color={"primary"} size="sm" shadow onPress={(e)=>{
               dispatch(updatepost({...UpdatePost})) 
               resetForm() 
               Alert() }} >Update</Button>
            <Spacer x={1}/>
            <Button color={"error"} size="sm" shadow   >Clear</Button>
          </Card.Footer>
    </Card>
    </form></>
  )
}
