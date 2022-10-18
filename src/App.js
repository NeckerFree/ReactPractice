import './App.css';
import CallApi from './components/CallApi';
import Pagination from './components/Pagination';
import ToggleButton from './components/ToggleButton';

const App = () => {
  return (
    <div className="contenedor">
      <CallApi />
      <ToggleButton />
      <Pagination />
    </div>

  )
};

export default App;


