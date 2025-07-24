import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import GetInvolved from './pages/GetInvolved'
import SocialJusticePanel from './pages/Panel'
import Events from './pages/Events'
import Publications from './pages/Publications'
import ArticleReader from './pages/ArticleReader'
import useFooterVisibility from './hooks/useFooterVisibility'

const AppContent = () => {
  const location = useLocation();
  const showFooter = useFooterVisibility(location.pathname);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/events" element={<Events />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/:slug" element={<ArticleReader />} />
          <Route path="/sjp" element={<SocialJusticePanel />} />
        </Routes>
      </main>
      <div className={`transition-opacity duration-300 ${showFooter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App