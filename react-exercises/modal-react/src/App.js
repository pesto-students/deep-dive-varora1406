import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Body } from './components/modal/body/body';
import { Footer } from './components/modal/footer/footer';
import { Header } from './components/modal/header/header';
import { Modal } from './components/modal/modal';
import { Show } from './components/show/show';


const App = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <button className="modal-open-button" data-testid="modal-open-button" onClick={openModal}><span role="img" aria-label="">💪</span> Open Dialog</button>
            <Show show={showModal}>
                <Modal onClose={closeModal} title="Pesto Ipsum" size="xs">
                    <Header>
                        Modal Login <span role="img" aria-label="">🏫</span>
                    </Header>
                    <Body>
                        <div className="login-page">
                            <div className="form">
                                <form className="login-form">
                                    <input type="text" placeholder="username" />
                                    <input type="password" placeholder="password" />
                                    <Link to="/home" tabIndex={-1}><button>login</button></Link>
                                </form>
                            </div>
                        </div>
                    </Body>
                    <Footer>
                        <button className="modal-cancel-button" onClick={closeModal}>Cancel</button>
                    </Footer>
                </Modal >
            </Show>
        </>
    );
}

export { App };

