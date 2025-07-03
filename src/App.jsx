import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/home/index';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/projects" element={<div>Projects Page</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
