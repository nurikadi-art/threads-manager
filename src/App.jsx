import { useEffect } from 'react';
import Presentation from './components/Presentation';
import { initPerformanceMonitoring } from './utils/performance';
import './styles/globals.css';

function App() {
  // Initialize performance monitoring in development
  useEffect(() => {
    initPerformanceMonitoring();
  }, []);

  return (
    <div className="app noise-overlay">
      <Presentation />
    </div>
  );
}

export default App;
