import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Telehealth from "./pages/Telehealth";
import Referral from "./pages/Referral";
import Plans from "./pages/Plans";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Appointment from "./pages/Appointment";
import Service from "./pages/Service";
// About pages
import Mission from "./pages/About/Mission";
import Team from "./pages/About/Team";
import Blog from "./pages/About/Blog";
import Contact from "./pages/About/Contact";
// Service pages
import Offerings from "./pages/Services/Offerings";
import Packages from "./pages/Services/Packages";
import Recommendations from "./pages/Services/Recommendations";

function AppContent() {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/register" ||
    ![
      "/",
      "/telehealth",
      "/referral",
      "/plans",
      "/about/team",
      "/about/mission",
      "/about/blog",
      "/about/contact",
      "/services/offerings",
      "/services/packages",
      "/services/recommendations",
      "/appointment",
      "/service",
    ].includes(location.pathname);

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <div className={!hideNavFooter ? "container" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telehealth" element={<Telehealth />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/service" element={<Service />} />
          {/* About Routes */}
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/blog" element={<Blog />} />
          <Route path="/about/contact" element={<Contact />} />
          {/* Services Routes */}
          <Route path="/services/offerings" element={<Offerings />} />
          <Route path="/services/packages" element={<Packages />} />
          <Route
            path="/services/recommendations"
            element={<Recommendations />}
          />
        </Routes>
      </div>
      {!hideNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
