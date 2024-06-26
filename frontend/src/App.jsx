import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todos from "./pages/Todos";
import CreateTodos from "./pages/CreateTodos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/createtodos" element={<CreateTodos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
