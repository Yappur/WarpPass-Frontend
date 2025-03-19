import { BrowserRouter as Router } from "react-router-dom";
import RoutesViews from "./routes/RoutesViews";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RoutesViews />
        <Footer />
      </Router>
    </>
  );
}

export default App;
