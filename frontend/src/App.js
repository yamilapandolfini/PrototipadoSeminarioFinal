import Pricing from "./components/pages/Pricing"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import DetalleProfesor from "./components/pages/DetalleProfesor"
import { Route, Routes } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path='/detail/:paramId' element={<DetalleProfesor />} />
      </Routes>
    </>
  )
}

export default App
