import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import { Route, Routes } from "react-router-dom";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<MovieDetailPage />} />
          <Route path="/category" element={<CategoryDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
