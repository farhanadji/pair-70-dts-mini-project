import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import MovieList from "./containers/MovieList";
import Navbar from "./components/NavBar";
import MovieBar from "./containers/MovieBar";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <HomePage />
        {/* <MovieDetailPage /> */}
        {/* <MovieBar /> */}
        {/* <MovieList></MovieList> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
