import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import { CookiesProvider } from 'react-cookie';

export default function AppRoute() {
  return (
    <div>
      <CookiesProvider>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
        </Routes>
      </CookiesProvider>
    </div>
  );
}
