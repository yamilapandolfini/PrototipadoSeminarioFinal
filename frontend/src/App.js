import Pricing from "./components/pages/Pricing"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import { Route, Routes } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
