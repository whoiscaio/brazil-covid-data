import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
