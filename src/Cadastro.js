import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './css/pure-min.css';


class Cadastro extends Component {
    render() {
        return (
        <div>
            <div className="header">
                <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                    <a className="pure-menu-heading" href="">Desafio</a>

                    <ul className="pure-menu-list">
                        <Link to="/"><li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li></Link>
                        <Link to="/Cadastro"><li className="pure-menu-item"><a href="#" className="pure-menu-link">Cadastro</a></li></Link>
                        <Link to="/Avaliacao"><li className="pure-menu-item"><a href="#" className="pure-menu-link">Avaliação</a></li></Link>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Resultados</a></li>
                    </ul>
                </div>
            </div>

            <div id="main" className="container bg-light"></div>

            <div className="header d-flex justify-content-center pt-5">
                <h1>Cadastro de clientes</h1>
            </div>

            <div className="d-flex justify-content-center">
                <div className="content" id="content">

                    <div className="pure-form pure-form-aligned">
                        <form className="pure-form pure-form-aligned">

                            <div className="pure-control-group ">
                                <label className="d-flex justify-content-start" htmlFor="nome">Nome</label>
                                <input id="nome" type="text" name="nome" value={this.props.value} placeholder="Razão social ou nome fantasia" />
                            </div>

                            <div className="pure-control-group">
                                <label className="d-flex justify-content-start" htmlFor="nome">Nome do contato</label>
                                <input id="contato" type="text" name="contato" value={this.props.value} placeholder="Pessoa responsável" />
                            </div>

                            <div className="pure-control-group">
                                <label className="d-flex justify-content-start" htmlFor="data">Data</label>
                                <input id="data" type="date" name="data" placeholder="Data em que se tornou cliente" />
                            </div>

                            <div className="pure-control-group">
                                <label></label>
                                <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                            </div>
                        </form>

                    </div>

                    <div>
                        <table className="pure-table">

                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Alberto</td>
                                    <td>Promotor</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <div className="pure-control-group pt-4 d-flex justify-content-end">
                        <label></label>
                        <Link to="/CadastroAvaliacao"><button type="button" className="pure-button pure-button-primary">Proximo</button></Link>
                    </div>

                </div>
            </div>
        </div>

        );
    }
}

export default Cadastro;