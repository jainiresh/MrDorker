import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './pages/Layout';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Layout />
    </div>
    </Provider>
  );
}

export default App;
