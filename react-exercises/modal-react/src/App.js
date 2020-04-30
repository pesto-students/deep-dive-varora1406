import React, { useState } from 'react';
import { Modal } from './modal/modal';
import { Header } from './modal/header/header';
import { Footer } from './modal/footer/footer';
import { Body } from './modal/body/body';


const App = () => {
  return (
    <Modal title="Pesto Ipsum" size="xs">
      <Header>Title 🏫</Header>
      <Body>modal body resides here 🏡</Body>
      <Footer></Footer>
    </Modal>
  );
}

export default App;
