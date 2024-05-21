import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddProduct from "./AddProduct"
import UpdateProduct from "./UpdateProduct";
import Login from "./Login";
import Register from "./Register"
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/users" element={<Users />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
