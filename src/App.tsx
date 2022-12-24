import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./routes/Home/Home"
import HomeBody from "./routes/Home/HomeBody"
import HomeIndex from "./routes/Home/HomeIndex"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeIndex />} />
          
          <Route path=':contaId/extratos' element={<HomeBody />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
