import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CallApi from './components/CallApi';
import Exercise4 from './components/Excercise4';
import Pagination from './components/Pagination';
import ToggleButton from './components/ToggleButton';
import IndexPage from './components/IndexPage';
import DogPage from './components/DogPage';
import Page404 from './components/Page404';

const App = () => {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route exact path="/callapi" element={<CallApi />} />
          <Route exact path="/toggebuton" element={<ToggleButton />} />
          <Route exact path="/pagination" element={<Pagination />} />
          <Route exact path="/exercise4" element={<Exercise4 />} />
          <Route exact path="/dogs/:breed/" element={<DogPage />} />
          <Route element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
};

export default App;


