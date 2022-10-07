import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import MarkElement from "./components/MarkElement";
import NavbarElement from "./components/NavbarElement";
import Login from "./pages/Login";


function App() {

  return (
    <>
      <Router>
        <NavbarElement/>
        <Container>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<MarkElement/>}/>
        </Routes>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
