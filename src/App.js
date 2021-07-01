import { HeaderWithRouter } from './components/navbar';
import Footer from './components/footer';
import Index from './components/index';
import About from './components/about';
import Services from './components/services';
import VoiceBank from './components/voiceBank';
import Contact from './components/contact';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="index">
      <Router>
        <HeaderWithRouter />

        <Switch>

          <Route path="/" exact component={Index} />

          <Route path="/about" component={About} />

          <Route path="/services" component={Services} />

          <Route path="/portfolio" component={Index} />

          <Route path="/voice-bank" component={VoiceBank} />

          <Route path="/contact" component={Contact} />

          <Route component={Index} />

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
