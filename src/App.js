import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutUs from './components/About-us';
import Navbar from './components/Navbar';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutUs />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
