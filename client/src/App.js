import ContactList from './Components/Contactlist';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router';
import AddContact from './Components/AddContact';

function App() {
  return ( 
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">CONTACT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">ContactList</Nav.Link>
            <Nav.Link href="/add">AddContact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
<Routes>
  <Route path='/'   element ={<ContactList/> }  ></Route>
  <Route path='/add' element ={<AddContact/> }></Route>
</Routes>

      </div>
  );
}

export default App;
