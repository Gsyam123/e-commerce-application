import "./App.css";
import { HomePage } from "./Components/HomePage";
import { Login } from "./Components/Login";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Registration } from "./Components/Registration";
import { PrivateRoute } from "./Components/PrivateRoute ";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
