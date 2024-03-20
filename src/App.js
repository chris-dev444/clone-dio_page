import { BrowserRouter as Router, Switch,Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";

function App() {
  return (
    <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Login" element={<Login/>}/>
           <Route path="/Feed" element={<Feed/>}/>
        </Routes>
    </Router>
  );
}

export default App;
