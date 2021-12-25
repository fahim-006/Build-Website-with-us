import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import TypeSelect from './screens/TypeSelect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>} exact/>
        <Route path="/typeselect" element={<TypeSelect/>} exact/>
        <Route path="/ordernow" element={<OrderScreen/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
