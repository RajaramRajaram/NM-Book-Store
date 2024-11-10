// src/components/Navbar.js

import './home.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Home = () => {

  return (
    <div className='bg'>
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:""}}>
      <Container>
        <Navbar.Brand ><Link to='/' style={{color:'white',textDecoration:"none"}}>BookStore</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/login" style={{padding:"10px",color:"white",textDecoration:"none"}}>User</Link>
            <Link to="/slogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Seller</Link>
            <Link to="/alogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Admin</Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <div className="content-overlay">
     <h1>Welcome to BookStore</h1>
     <p>Explore a wide variety of books, from fiction to non-fiction, by various authors.</p>
     
   </div>
 </div>
  );
};

export default Home;
