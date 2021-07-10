import { HeaderWithRouter } from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import VoiceBank from './components/pages/VoiceBank';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
