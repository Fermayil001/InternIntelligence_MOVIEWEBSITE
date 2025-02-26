import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import ErrorBoundary from "./components/error/ErrorBoundary";
import Details from "./pages/details/Details";
import { SkeletonTheme } from 'react-loading-skeleton'
import Favorites from './pages/favorites/Favorites';

function App() {

  return (
    <ErrorBoundary>
      <SkeletonTheme baseColor='#363547' highlightColor="#8280ab">
        <Router>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/movie/details/:name/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </ErrorBoundary>
  )
}

export default App
