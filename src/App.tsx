import './App.css';
import { Menu } from './components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Dashboard } from './modules/dashboard';
import { Management } from './modules/management';
import { Metrics } from './modules/metrics';
import { ServicesProvider } from './services/provider';
import { MoneyBucketService } from './services';
import { MoneyBucketBffClient } from './services/MoneyBucketBffClient';

const url = 'http://localhost:5080/api';
const moneyBucketClient = new MoneyBucketBffClient(url);
const moneyBucketService = new MoneyBucketService(moneyBucketClient);

function App() {
  return (
    <div className="App">
      <ServicesProvider moneyBucketService={moneyBucketService}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/management" element={<Management />}/>
            <Route path="/metrics" element={<Metrics />}/>
            <Route path="*" element={<Menu />}/>
          </Routes>
        </Router>
      </ServicesProvider>
    </div>
  )
}

export default App;
