import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Works from "./components/Works/works";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
