import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
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
        <Route path="*" element={<Navigate to="home"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
