import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<HomeBody />} />
        <Route path="promotion" element={<Promotion />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
