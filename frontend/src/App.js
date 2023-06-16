import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//Landing Page
import HomePage from './components/views/HomePage';

//Headers
import Header from './components/views/Header';

//Footer
import Footer from './components/views/Footer';

function App() {
  return (
    <Router>
    <Routes>

      <Route path='/' element={<HomePage />} />

      <Route element={<Header />} />
      <Route element={<Footer />} />

    </Routes>  
  </Router>
  );
}

export default App;
