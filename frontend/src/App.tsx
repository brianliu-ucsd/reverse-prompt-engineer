import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/material';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container className="background-image" disableGutters>
        <Footer></Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
