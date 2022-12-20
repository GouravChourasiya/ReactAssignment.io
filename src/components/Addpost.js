import React, { useState } from 'react'
import { Card ,Text,Input, Spacer,Textarea,Button} from '@nextui-org/react';
import {BiArrowBack} from "react-icons/bi"
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch,useSelector } from 'react-redux';
import {addpost} from '../Redux/reducer/postSlice'
import { Link } from 'react-router-dom';






export const Addpost = () => {
  const dispatch = useDispatch()
    const posts = useSelector((state) => state.items);

  const [AddPost, setAddPost] = useState({
    id:posts.length+1,
    title:"",
    category:"",
    description:"",
    Like:0
  })
  const handlePost=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setAddPost({...AddPost,[name]:value})
  }
 
  const resetForm=()=>{
    
    
    setAddPost({
      title:"",
    category:"",
    description:""
      });
  }
  const Alert=()=>{
    alert("Data Added succesfully");
  }

  
  return (
    <>
   
    <form  >
    <Card  css={{ w:"50%", h: "400px",marginLeft:"auto" ,
    marginRight:"auto",top:"10vh"
    }}>
        <Card.Header >
        <Link to="/"> <Button color="gradient" size={"sm"} shadow auto iconRight={<BiArrowBack/>}>
          Back
        </Button></Link>
            <Text b size={"$xl"} color="secondary" css={{
              marginLeft:"30%" ,
              
            }}>Add Post</Text>

          </Card.Header>
          <Scrollbars>
          <Card.Body >
          
        {/* for titile */}
          <Input
          
          bordered
         label='Title'
         name='title'
         value={AddPost.title}
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
          value={AddPost.category}
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
          value={AddPost.description}
            onChange={handlePost}
          Placeholder="Enter Description"
        />
        
       
          </Card.Body>
          </Scrollbars>
         
          <Card.Footer>
            <Button color={"primary"} size="sm" shadow onPress={(e)=>{
               dispatch(addpost({...AddPost}))
               resetForm()
            
               Alert()
               
            }} >Submit</Button>
            <Spacer x={1}/>
            <Button color={"error"} size="sm" shadow  onPress={()=> resetForm()} >Clear</Button>
          </Card.Footer>
    </Card>
    </form>
    {/* {posts.map(post =><div>
    <p>{post.title}</p>
    <p>{post.category}</p>
    <p>{post.description}</p>

    </div>

  )} */}
    </>
  )
}

export default Addpost;


