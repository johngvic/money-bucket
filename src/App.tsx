import './App.css';
import { Menu } from './components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Activity } from './modules/activity';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />}/>
          <Route path="/activity" element={<Activity />}/>
          <Route path="*" element={<Menu />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
