import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Routes, Route } from "react-router-dom"
import Bird from './Bird';
import Mountain from './Mountain';
import Beach from './Beach';
import Food from './Food';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={ <Header/> } />
        <Route path="/mountain" element={ <Mountain/> } />
        <Route path="/beach" element={ <Beach/> } />
        <Route path="/bird" element={ <Bird/> } />
        <Route path="/food" element={ <Food/> } />

      </Routes>
    </div>
  );
}

export default App;
