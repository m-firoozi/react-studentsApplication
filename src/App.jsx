import { Container } from "react-bootstrap";
import Footer from "./components/footer/Footer";
import NavbarHeader from "./components/header/NavbarHeader";
import Students from "./components/students/Students";
import { BACKGROUND, FOREGROUND } from "./helpers/colors";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Notfound from "./pages/Notfound";

const App = () => {
      
   
  return (
       <div style={{color:FOREGROUND}}>
      <BrowserRouter>
      <NavbarHeader />
        <Routes>
          <Route path="/" element={<Students/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>


    
  );
};

export default App;
