import Home from "./Components/Home"
import Login from "./Components/Login"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    

    
  )
}

export default App