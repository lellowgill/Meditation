import {
  // BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignUp from '../src/Components/signUp'
import CheckOut from '../src/Components/checkOut'
import LandingPage from '../src/Components/landingPage'
export default function App () {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<SignUp />} />
      <Route path="checkOut" element={<CheckOut/>} />
    </Routes>
  )
}














/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
