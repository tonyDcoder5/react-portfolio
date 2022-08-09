import './App.css';
import { Header } from './components/Header';
import { About } from './components/About'
import { Projects } from './components/Projects';
import { References } from './components/References';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <References />
      <ContactMe />
      <Footer />
    </div>

  );
}

export default App;
