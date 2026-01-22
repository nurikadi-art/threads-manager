import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Presentation from './components/Presentation';
import BookCallWidget from './components/BookCallWidget';
import SmartWorkerPresentation from './smartworker/SmartWorkerSlides';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter basename="/threads-manager">
      <Routes>
        <Route
          path="/"
          element={
            <div className="app noise-overlay">
              <Presentation />
              <BookCallWidget />
            </div>
          }
        />
        <Route path="/smartworker" element={<SmartWorkerPresentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
