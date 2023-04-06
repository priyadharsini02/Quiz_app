import './App.css'
import NavBar from './Components/Navbar';
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
//import Quiz from './Components/Trivia1';
import Lr from './Components/LR';
//import Trivia from './Components/Trivia';
import Quiz from './Components/Trivia1';


export default function App() {
  return (
    <>
    <Router>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Lr/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}
