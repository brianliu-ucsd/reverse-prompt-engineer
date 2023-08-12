import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Footer from './components/Footer';
import Input from './components/Input';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container className="background-image" disableGutters>
        <Box 
          display={'flex'} 
          justifyContent={'center'} 
          alignItems={'center'}
          sx={{
            backgroundColor: 'rgb(10,0,10,0.9)'
          }}
        >
          <Input></Input>
        </Box>
        <Footer></Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
