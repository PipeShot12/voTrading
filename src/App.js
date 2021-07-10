// import { lazy, Suspense } from "react"

import { HeaderWithRouter } from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import VoiceBank from './components/pages/VoiceBank';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const Home = lazy(() => import("./components/pages/Home"))
// const About = lazy(() => import("./components/pages/About"))
// const Services = lazy(() => import("./components/pages/Services"))
// const VoiceBank = lazy(() => import("./components/pages/VoiceBank"))
// const Contact = lazy(() => import("./components/pages/Contact"))
// const NotFound = lazy(() => import("./components/pages/NotFound"))

function App() {
  return (
    <div className="index">
      <Router>

        <HeaderWithRouter />

        <Switch>

          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />

          <Route path="/services" component={Services} />

          <Route path="/portfolio" component={Home} />

          <Route path="/voice-bank" component={VoiceBank} />

          <Route path="/contact" component={Contact} />

          <Route component={NotFound} />

        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
