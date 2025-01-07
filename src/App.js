import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import Layout from './pages/Layout';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { OpenFeatureProvider } from '@openfeature/react-sdk';


function App() {

  return (
    <Provider store={store}>
      <OpenFeatureProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
      </OpenFeatureProvider>
    </Provider>
  );
}

export default App;
