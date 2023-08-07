import './App.css';
import { Resume } from './components/Resume';
import { raw } from './raw';


function App() {
  return (
    <div className="App">
      <Resume contents={raw} />
    </div>
  );
}

export default App;
