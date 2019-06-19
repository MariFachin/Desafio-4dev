import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBInput, MDBFormInline } from 'mdbreact';
import './css/pure-min.css';

class Avalicao extends Component {
    render() {
        return (
        <div>
            <div className="header">
                <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                    <a className="pure-menu-heading" href="">Desafio</a>

                    <ul className="pure-menu-list">
                        <Link to="/"><li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li></Link>
                        <Link to="/Cadastro"><li className="pure-menu-item"><a href="#" className="pure-menu-link">Cadastro</a></li></Link>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Avaliação</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Resultados</a></li>
                    </ul>
                </div>
            </div>

            <div id="main" className="container bg-light">

                <div className="header d-flex justify-content-center pt-5">
                    <h1>Avaliação</h1>
                </div>

            <div className="d-flex justify-content-center">
                <div className="content" id="content">
                    <div className="pure-form pure-form-aligned">
                        <form className="pure-form pure-form-aligned">
                            <div className="pure-control-group ">
                                <label className="d-flex justify-content-start text-nowrap bd-highlight" htmlFor="1">1.Em uma escala de 0 a 10, qual a probabilidade de você recomendar nosso produto
                                /serviço a um amigo/conhecido?</label>
                                <MDBFormInline className="">
                                    <MDBInput label="1" filled type="radio" id="radio1" name="check"/>
                                    <MDBInput label="2" filled type="radio" id="radio2" name="check"/>
                                    <MDBInput label="3" filled type="radio" id="radio3" name="check"/>
                                    <MDBInput label="4" filled type="radio" id="radio4" name="check"/>
                                    <MDBInput label="5" filled type="radio" id="radio5" name="check"/>
                                    <MDBInput label="6" filled type="radio" id="radio6" name="check"/>
                                    <MDBInput label="7" filled type="radio" id="radio7" name="check"/>
                                    <MDBInput label="8" filled type="radio" id="radio8" name="check"/>
                                    <MDBInput label="9" filled type="radio" id="radio9" name="check"/>
                                    <MDBInput label="10" filled type="radio" id="radio10" name="check"/>
                                </MDBFormInline>
                            </div>
                        
                            <div className="pure-control-group">
                                <label className="d-flex justify-content-start text-nowrap bd-highlight" htmlFor="2">2.Qual é o motivo dessa nota?</label>
                                <input id="razao" type="text" name="razao" value={this.props.value} />
                            </div>
                        </form>
                    </div>

                    <div className="pure-control-group pt-4 d-flex justify-content-center">
                        <label></label>
                        <Link to="/CadastroAvaliacao"><button type="button" className="pure-button pure-button-primary mr-5">Anterior</button></Link>
                        <button type="button" className="pure-button pure-button-primary ">Finalizar</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

        );
    }
}
export default Avalicao;