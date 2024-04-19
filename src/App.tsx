import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Courses from './pages/Courses';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import EnglishPage from './pages/EnglishPage';
import MathsPage from './pages/MathsPage';
import VerbalPage from './pages/VerbalPage';
import NonVerbalPage from './pages/NonVerbalPage';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import ExamTimer from './pages/ExamTimer';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/english-papers" element={<EnglishPage />} />
          <Route path="/maths-papers" element={<MathsPage />} />
          <Route path="/verbal-papers" element={<VerbalPage />} />
          <Route path="/nonverbal-papers" element={<NonVerbalPage />} />
          <Route path="/team-page" element={<Team />} />
          <Route path="/testimonials-page" element={<Testimonials />} />
          <Route path="/examTimer-page" element={<ExamTimer />} />
          <Route path="/contact-page" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}
