import "./App.css";
import Home from "./components/Home/Home";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans"
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <Programs />
      <Reasons/>
      <Plans/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
