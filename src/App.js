import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './css/pure-min.css';
import './css/marketing.css';

class App extends Component {
    render() {
        return (
        <div>
            <div className="header">
                <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                    <a className="pure-menu-heading" href="">Desafio</a>

                    <ul className="pure-menu-list">
                        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
                        <Link to="/Cadastro"><li className="pure-menu-item"><a href="#" className="pure-menu-link">Cadastros</a></li></Link>
                        <Link to="/Avaliacao"><li className="pure-menu-item"><a href="#" className="pure-menu-link">Avaliação</a></li></Link>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Resultados</a></li>
                    </ul>
                </div>
            </div>

            <div className="splash-container">
                <div className="splash">
                    <h1 className="splash-head">Avaliação</h1>
                    <p className="splash-subhead">
                        Não deixe de dar sua opnião, ela é muito importante para nós.
                    </p>
                    <p>
                        <Link to="/Cadastro"><a className="pure-button pure-button-primary">Vamos lá</a></Link>
                    </p>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="content">
                    <h2 className="content-head is-center">Porque sua opinião é tão importante para nós.</h2>

                    <div className="pure-g">
                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                            <h3 className="content-subhead">
                                <i className="fa fa-rocket"></i>
                                Qualidade
                            </h3>
                            <p>
                                Ajuda a melhorar a qualidade de nossos serviços.
                            </p>
                        </div>

                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                <i className="fa fa-mobile"></i>
                                Inovação
                            </h3>
                            <p>
                                Com a sua ajuda podemos nos reinventar.
                            </p>
                        </div>

                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                <i className="fa fa-th-large"></i>
                                Indentificar erros.
                            </h3>
                            <p>
                                Sabendo onde erramos encontramos onde melhorar.
                            </p>
                        </div>

                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                <i className="fa fa-check-square-o"></i>
                                Por você
                            </h3>
                            <p>
                                Para que nós possamos suprir suas necessidade.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer l-box is-center">
                    Obrigada pela visita.
                </div>

            </div>
        </div>
        );
    }
}

export default App;
