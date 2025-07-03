import "./css/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Navbar from "./component/Navbar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    // <> means fragment it is a placeholder for a parent element it solves the problem if we want a two divs


        <MovieProvider>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        </MovieProvider>
     
  
  );
}

export default App;
