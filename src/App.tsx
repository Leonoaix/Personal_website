import AppRouter from './routers/index';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}
export default App;

