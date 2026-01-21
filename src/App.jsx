import Presentation from './components/Presentation';
import BookCallWidget from './components/BookCallWidget';
import './styles/globals.css';

function App() {
  return (
    <div className="app noise-overlay">
      <Presentation />
      <BookCallWidget />
    </div>
  );
}

export default App;
