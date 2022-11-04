import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallApi from './components/CallApi';
import Exercise4 from './components/Exercise4';
import Pagination from './components/Pagination';
import ToggleButton from './components/ToggleButton';
import IndexPage from './components/IndexPage';
import DogPage from './components/DogPage';
import Page404 from './components/Page404';
import ErrorHandler from './components/ErrorHandler';
import NotFound from './components/NotFound';
import WindowSize from './components/WindowSize';
import UsingReducer from './components/UsingReducer';
import ErrorCounter from './components/ErrorCounter';

const App = () => {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <ErrorHandler>
            <Routes>
              <Route exact path="/" element={<IndexPage />} />
              <Route exact path="/callapi" element={<CallApi />} />
              <Route exact path="/toggebuton" element={<ToggleButton />} />
              <Route exact path="/pagination" element={<Pagination />} />
              <Route exact path="/exercise4" element={<Exercise4 />} />
              <Route exact path="/dogs/:breed/" element={<DogPage />} />
              <Route exact path='/windowsize' element={<WindowSize />} />
              <Route exact path='/usingreducer' element={<UsingReducer />} />
              <Route exact path='/counter' element={<ErrorCounter />} />
              <Route element={Page404} />
              <Route path="*" element={<NotFound />} />
              {/* <Route component={Page404} /> */}
            </Routes>
          </ErrorHandler>
          </BrowserRouter>
    </div>

  )
};

export default App;
