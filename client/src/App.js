import './App.css';
import AddTransaction from './components/AddTransaction';
import {Route, Routes} from 'react-router-dom'
import BalanceSheet from './components/BalanceSheet';

function App() {
  return (

    <Routes>
      <Route path='/' element={<BalanceSheet/>}/>
      <Route path='/transaction' element={<AddTransaction/>}/>
    </Routes>
    
  );
}

export default App;
