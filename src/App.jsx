import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Auth } from '@/layouts';
import { Janitors, Collectors, MCPs } from '@/pages/dashboard';

function App() {
  return (
    <Routes>
      <Route
        path="/dashboard/*"
        element={<Dashboard />}>
        <Route
          path="*/janitors"
          element={<Janitors />}
        />{' '}
      </Route>

      <Route
        path="/auth/*"
        element={<Auth />}
      />
      <Route
        path="*"
        element={
          <Navigate
            to="/auth/sign-in"
            replace
          />
        }
      />
    </Routes>
  );
}

export default App;
