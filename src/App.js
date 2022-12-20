import Navbar from "../src/components/navbar"
import { NextUIProvider } from "@nextui-org/react"
import { createTheme } from "@nextui-org/react"
import useDarkMode from 'use-dark-mode';
import Card1 from './components/Card1'
import Addpost from "./components/Addpost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewBlog } from "./components/ViewBlog";
import { UpdatePost } from "./components/UpdatePost";

function App () {
  const darkMode = useDarkMode(false);
  const lightTheme = createTheme({
    type: 'light',
    theme: {
      
    }
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
     
    }
  })
  return (
    <NextUIProvider  theme={darkMode.value ? darkTheme : lightTheme}>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Card1/>}/>
        <Route  path="/addpost" element={<Addpost/>}/>
        <Route  path="/view/:id" element={<ViewBlog/>}/>
        <Route  path="/update/:id" element={<UpdatePost/>}/>
      
      </Routes>
      </BrowserRouter>
     
    </NextUIProvider>
   
  )
}
export default App;
