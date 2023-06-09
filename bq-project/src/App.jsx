import Login from './components/Login.jsx';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Waitress from './components/Waitress.jsx';
import Chef from './components/Chef.jsx';

export default function App() {
  return (
    <>
      <Router>
        {<Routes>
          <Route path="/" element={<Login />} />
          <Route path="/waitress" element={<Waitress />} />
          <Route path="/Chef" element={<Chef />} />
        </Routes>}
      </Router>
    </>
  );
}