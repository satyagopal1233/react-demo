
import './App.css';
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './components/cake/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCream';
import UserLibraryContainer from './components/UserLibraryContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <UserLibraryContainer/>
      
    </div>
    </Provider>
  );
}

export default App;
