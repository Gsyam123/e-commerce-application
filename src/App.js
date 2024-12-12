import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Registration } from "./stores/components/Registration";
import { PrivateRoute } from "./stores/components/PrivateRoute ";
import { Login } from "./stores/components/Login";
import LandingPage from "./stores/pages/LandingPage";

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
                <LandingPage />
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
