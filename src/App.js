import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import Layout from './pages/Layout';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';


function App() {
  
  return (
    <Provider store={store}>

  <BrowserRouter>
      <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
