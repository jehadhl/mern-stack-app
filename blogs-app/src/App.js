import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context)
  return (
    <div className="App">
        <Router>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/write" element={user ? <Write /> : <Register />} />
            <Route path="/settings" element={user ? <Settings /> : <Register />}/>
            <Route path="/register" element={user ? <Home /> : <Register />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/post/:id" element={<Single />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
