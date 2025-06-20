import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ClinicDetailPage from './pages/ClinicDetailPage';
import CabinetPage from './pages/CabinetPage';
import DoctorsPage from './pages/DoctorsPage';



const PatientsPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Пациенту</h1>
      <p className="text-gray-600">Страница в разработке</p>
    </div>
  </div>
);

const SpecialistsPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Медицинским специалистам</h1>
      <p className="text-gray-600">Страница в разработке</p>
    </div>
  </div>
);

const LegalPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Юридическим лицам</h1>
      <p className="text-gray-600">Страница в разработке</p>
    </div>
  </div>
);

const ContactsPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Контакты</h1>
      <p className="text-gray-600">Страница в разработке</p>
    </div>
  </div>
);

function App() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData: any) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header onLogin={handleLogin} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/clinic/:id" element={<ClinicDetailPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />

              <Route path="/patients" element={<PatientsPage />} />
              <Route path="/specialists" element={<SpecialistsPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route
                path="/cabinet"
                element={
                  currentUser ? (
                    <CabinetPage user={currentUser} onLogout={handleLogout} />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
