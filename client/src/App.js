import {Routes, Route} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Register from "./pages/Auth/Register"
import Login from "./pages/Auth/Login"
import Pagenotfound from "./pages/Pagenotfound";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/dashboard" element={<PrivateRoute/>}>
    <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>

    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/policy" element={<Policy/>}/>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="*" element={<Pagenotfound />} />
  </Routes>
    </>
  );
}

export default App;