import './App.css';
import { Menu } from './components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Management } from './modules/management';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />}/>
          <Route path="/management" element={<Management />}/>
          <Route path="*" element={<Menu />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
