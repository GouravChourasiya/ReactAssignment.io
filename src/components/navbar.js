import React from "react";
import { Navbar, Button, Text, useTheme ,Switch,Link} from "@nextui-org/react";
import useDarkMode from 'use-dark-mode';
import {BsMoonFill} from 'react-icons/bs'
import{BiSun} from 'react-icons/bi'
import Searchbar from "./searchbar";



export default function App() {
 

  const darkMode = useDarkMode(false);
  const { isDark } = useTheme();


  
  return (
    
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          
          <Text b weight={"semibold"} color="secondary" hideIn="xs">
            BLOG APP
          </Text>
        </Navbar.Brand>
          
         <Searchbar/>
     
       
        <Navbar.Content>
          {/* Using Switch to switch between modes */}
        <Switch
        checked={darkMode.value}
        onChange={() => darkMode.toggle()}
        iconOn={<BsMoonFill/>}
        iconOff={<BiSun/>}
        shadow
        color={'secondary'}
      />
          <Navbar.Item>
          <Link href="/addpost"> <Button auto shadow  color={'secondary'}>
              Add Post
            </Button></Link>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      
       
    
  )
}
