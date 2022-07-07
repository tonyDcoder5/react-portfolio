import './App.css';
import { Header } from './components/Header';
import { About } from './components/About'
import { Projects } from './components/Projects';
import { References } from './components/References';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
TODOS 
- ADD GITHUB LINK TO HEADNAV
- ADD FLOATING SIDE NAV
- CHANGE BG IMG AND TAGELINE STYLES
- ADD SHORT BIO/ABOUT ME 
- ADD PERSONAL HEADER IMAGE & LOGO
*/

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <br />
      <Projects />
      <br />
      <References />
      <br />
      <ContactMe />
      <br />
      <Footer />
    </div>

  );
}

export default App;
