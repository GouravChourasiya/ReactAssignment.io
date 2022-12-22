import React from "react";
import { Card, Col, Row, Button, Text,Spacer } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import {BiLike} from 'react-icons/bi'
import { updateLike } from "../Redux/reducer/postSlice";
import { useNavigate } from "react-router-dom";




export const Card1 = () => {
 
  // Getting data from store
  const posts = useSelector((state) => state.items)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerPadding: "60px",
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  const dispatch = useDispatch()
  const navigate =useNavigate();
  

  return(
  <>
   
   <Spacer y={1}/>
   
  <Text size="$xl" weight={"semibold"} color="secondary" css={{marginLeft:"20px"}}>New Blogs</Text>
   <Spacer y={1}/>

{/* Card Carousel using react slick library */}
 <Slider {...settings}>
{/*   mapping data from redux store */}
   {posts.map(post=>
   <div css={{ w:"100%", h:"500px"}} >
  <Card onPress={()=>navigate("/view/"+post.id)} isPressable={"true"} variant="flat" css={{ w:"90%", h:"200px",marginLeft:'20px'}}>
  
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Title  : {post.title}
        </Text>
        <Text h3 color="black">
         Category :  {post.category}
        </Text>
      </Col>
    </Card.Header>
    
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://nextui.org/images/card-example-6.jpeg"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
   
  
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Button  shadow auto color={'primary'}
           iconRight={<BiLike/>} 
           onPress={()=>dispatch(updateLike({id:post.id ,Like:post.Like+1 }))}
            >Like </Button>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                {post.Like}
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  

  </Card>
  
  </div>
   )}
   
 
 </Slider>
 
</>
  
)};
export default Card1;

