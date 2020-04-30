import React, { useState } from 'react';
import { Modal } from './modal/modal';
import { Header } from './modal/header/header';
import { Footer } from './modal/footer/footer';
import { Body } from './modal/body/body';


const App = () => {
    return (
        <Modal title="Pesto Ipsum" size="xs">
            <Header>Modal Login 🏫</Header>
            <Body>
                <div className="login-page">
                    <div className="form">
                        <form className="login-form">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button>login</button>
                            <p className="message">Not registered? <a href="#">Create an account</a></p>
                        </form>
                    </div>
                </div>
            </Body>
            <Footer>
                <button className="modal-cancel-button">Cancel</button>
            </Footer>
        </Modal>
    );
}

export default App;
