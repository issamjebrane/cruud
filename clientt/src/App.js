import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Books from './pages/Books';
import Update from './pages/Update';
import Add from './pages/Add';
import "./style.scss"

function App() {
  return (
    <div className="app">
      <Router>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
