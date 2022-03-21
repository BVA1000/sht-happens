import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand id="sht-happens">SHT HAPPENS®</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
            </Routes>
          </Container>
        </main>
        <footer className="text-center">
          <div>
            SHT HAPPENS® "SUCCESS HERE TODAY", Copyright 2022 All Rights
            Reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
