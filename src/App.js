import './App.css';
import logo from './images/gestem.jpg';
import './components/Registration.js';
import Registration from './components/Registration.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Save the date: May 16, 2024</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Registration />
    </div>
  );
}

export default App;
