import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import HomePage from '../pages/Home';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
