import Photo from './Photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Photo} className="App-Photo" alt="Photo" />
      </header>
    </div>
  );
}

export default App;
