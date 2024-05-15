import { BrowserRouter,Route,Routes } from "react-router-dom"
import './App.css'
import Course from "./pages/Course"
import Detail from "./pages/CourseDet"

const App = () =>
  {
   return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Course/>}/>
      <Route path='/:DetName' element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
   )
  };

export default App