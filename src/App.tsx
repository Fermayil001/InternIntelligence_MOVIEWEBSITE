import { Provider } from "react-redux"
import { store } from "./redux/store"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
