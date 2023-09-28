import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

import Parent from './Parent';
import Header from './Header';
import Footer from './Footer';
import Wrapper from './Wrapper';

function App() {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <Parent></Parent>
      </Wrapper>
      <Footer></Footer>
    </>
  )
}

export default App;
