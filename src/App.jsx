import './App.css';
import './Components/css/Keyboard.css';
import Keyboard from './Components/jsx/Keyboard';

const App = () => {
  return (
    <div className="App">
      <h1 className="header">Wordle</h1>
      <Keyboard />
    </div>
  );
}

export default App;
