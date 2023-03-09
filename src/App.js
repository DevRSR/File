import Header from './components/Header';
import Intro from './components/Intro'
import Scroll from './components/Scroll';
import Download from './components/Download';
import Faq from './components/Faq';
import Uptodate from './components/Uptodate';
import Footer from './components/Footer';
function App ()  {  
  return (
    <div className="container">
     <Header />
     <Intro />
     <Scroll />
     <Download />
     <Faq />
     <Uptodate />
     <Footer />
    </div>
  );
}

export default App;
