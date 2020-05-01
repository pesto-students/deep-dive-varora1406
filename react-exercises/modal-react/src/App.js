import React from 'react';
import { Modal } from './modal/modal';
import { Header } from './modal/header/header';
import { Footer } from './modal/footer/footer';
import { Body } from './modal/body/body';
import { Link } from 'react-router-dom';


const App = () => {
    return (
        <Modal title="Pesto Ipsum" size="xs">
            <Header>
                Modal Login <span role="img" aria-label="">🏫</span>
            </Header>
            <Body>
                <div className="login-page">
                    <div className="form">
                        <form className="login-form">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <Link to="/home"><button>login</button></Link>
                        </form>
                    </div>
                </div>
            </Body>
            <Footer>
                <button className="modal-cancel-button">Cancel</button>
            </Footer>
        </Modal >
    );
}

export { App };
