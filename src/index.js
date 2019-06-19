import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cadastro from './Cadastro';
import Cadastro2 from './Cadastro2';
import Avaliacao from './Avaliacao';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Cadastro" component={Cadastro} />
            <Route path="/CadastroAvaliacao" component={Cadastro2} />
            <Route path="/Avaliacao" component={Avaliacao} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
    );


serviceWorker.unregister();