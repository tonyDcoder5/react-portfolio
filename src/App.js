import logo from './logo.svg';
import './App.css';
import {HeaderNav} from './components/HeaderNav';
import { Banner } from './components/Banner'
import { About } from './components/About'
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
      <HeaderNav />
      <Banner />
      <About />
    <footer>
    <a href='https://www.freepik.com/vectors/japanese-cloud'>Japanese cloud vector created by rawpixel.com - www.freepik.com</a>
    </footer>
    </div>

  );
}

export default App;
