import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesViews from "./routes/RoutesViews";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar className="flex-shrink-0" />
        <main className="flex-grow">
          <RoutesViews />
        </main>
        <Footer className="flex-shrink-0" />
      </Router>
    </div>
  );
}

export default App;
