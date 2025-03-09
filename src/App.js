import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './Pages/Home';
import Navbar from './Layouts/Navbar';

function App() {
  return (
    <Router>
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route index element={<Navbar />} />
    </Routes>
  </Router>
  );
}

export default App;
