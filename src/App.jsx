import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import NotFound from "./NotFound.jsx";
import CurrentLocation from "./CurrentLocation.jsx";


function App() {

  return (
    <Router>
        <div className="min-h-screen bg-gray-100">
        <nav className='bg-blue-600 p-4'>
            <ul className='flex justify-center space-x-4'>
                <li><Link className='text-white hover:text-yellow-300 font-medium transition duration-300'
                          to={"/"} >
                    Home
                </Link></li>
                <li><Link className='text-white hover:text-yellow-300 font-medium transition duration-300' to={"/about"} >
                    About</Link></li>
                <li><Link className='text-white hover:text-yellow-300 font-medium transition duration-300' to={"/contact"} >
                    Contact</Link></li>
            </ul>
        </nav>
            <CurrentLocation />
            <div className='container mx-auto py-8'>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact  />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
            </div>
        </div>
    </Router>

  );
}

export default App
