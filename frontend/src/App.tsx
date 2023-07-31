import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Container disableGutters>
        <Header></Header>
      </Container>
    </BrowserRouter>
  );
}

export default App;
