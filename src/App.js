import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './router/MainRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
