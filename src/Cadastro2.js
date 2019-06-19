import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './css/pure-min.css';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


class Cadastro2 extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;

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

                <div id="main" className="container bg-light">

                <div className="header d-flex justify-content-center pt-5">
                    <h1>Cadastro de avaliações</h1>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="content" id="content">

                        <div className="pure-form pure-form-aligned">
                            <form className="pure-form pure-form-aligned">

                                <div className="pure-control-group ">
                                    <label className="d-flex justify-content-start" htmlFor="data">Data</label>
                                    <input id="data" type="month" name="data" value={this.props.value} placeholder="Mês e e ano de referência" required />
                                </div>

                                <div className="pure-control-group  ">
                                    <label className="d-flex justify-content-start">Clientes</label>
                                    <Select
                                        value={selectedOption}
                                        onChange={this.handleChange}
                                        options={options}
                                        required
                                    />
                                </div>


                                <div className="pure-control-group">
                                    <label></label>
                                    <button type="submit" className="pure-button pure-button-primary mt-4">Salvar</button>
                                </div>
                            </form>

                        </div>


                        <div className="pure-control-group pt-4 d-flex justify-content-end">
                            <label></label>
                            <Link to="/Cadastro"><button type="button" className="pure-button pure-button-primary mr-5">Anterior</button></Link>
                            <Link to="/Avaliacao"><button type="button" className="pure-button pure-button-primary ">Proximo</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default Cadastro2;