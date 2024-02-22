import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import NonFound from "./Component/NonFound";
import Signup from "./Component/UserAuthentication/Signup";
import Login from "./Component/UserAuthentication/Login";
import Dashboard from "./Component/Dashboard";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NonFound />} />
      </Routes>
    </>
  );
}

export default App;
