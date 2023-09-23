import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import About from "./routes/About";
import Computers from "./routes/Products/Computers";
import Eletronics from "./routes/Products/Eletronics";
import Books from "./routes/Products/Books";
import PathNotFound from "./routes/PathNotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Navigate to="/home" />} />
        <Route path="/products" element={<Products />}>
          <Route path="/products/computers" element={<Computers />} />
          <Route path="/products/eletronics" element={<Eletronics />} />
          <Route path="/products/books" element={<Books />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PathNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
