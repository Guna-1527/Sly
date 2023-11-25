import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Price from "./pages/Price"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto-price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App