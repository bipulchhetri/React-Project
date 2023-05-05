

import Header from './components/Header';
import Home from './components/Home';


import './Style/Header.scss'
import './Style/App.scss'
import './Style/Home.scss'
import './Style/Footer.scss'
import './Style/Contact.scss'
import './Style/Media.scss'


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
function App() {
  return (
 

      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Contact' element={<Contact/>} />

        </Routes>
   <Footer/>
      </Router>

   
  );
}

export default App;
