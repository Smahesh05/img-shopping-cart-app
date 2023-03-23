import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
