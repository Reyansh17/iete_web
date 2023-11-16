import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Home/navbar/NavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
