import './scss/app.scss';
import Header from './containers/header/Header';
import Main from './containers/main/Main';
import Services from './containers/services/Services';
import Descriptions from './containers/descriptions/Descriptions';
import Testimonials from './containers/testimonials/Testimonials'; 
import Footer from './containers/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
      <Descriptions />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
