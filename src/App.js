import logo from './logo.svg';
import './App.css';
import {withRouter} from 'react-router-dom'
import Home from './pages/home'
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default withRouter(App);
