import LoginPage from './components/LoginPage/LoginPage';
import './nullstyle.css'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <LoginPage/>
      </div>
    </BrowserRouter>

  );
}

export default App;
