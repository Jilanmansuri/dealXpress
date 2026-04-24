import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import DashboardLayout from './components/layouts/DashboardLayout';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/marketplace" element={<Marketplace />} />
          {/* Redirect to marketplace by default for dashboard */}
          <Route path="/dashboard" element={<Navigate to="/marketplace" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
