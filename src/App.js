import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Hero from "./components/Hero/Hero.jsx"
import Join from './components/Join/Join.jsx';
import Plans from './components/Plans/Plans.jsx';
import Reasons from './components/Reasons/Reasons.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';

import Programs from './components/programs/Programs.jsx';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
