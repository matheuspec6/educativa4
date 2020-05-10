import React, { useState } from 'react';
import logo from './logo.png'
import welcome from "./welcome.png"
import './login.css';
import Emoji from 'react-emoji-render';

import { useSelector, useDispatch} from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import firebase from 'firebase'
import '../../config/firebase';
import 'firebase/auth';


function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch();


    function logar() {

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {

            setMsgTipo('sucesso')
            dispatch({type: 'LOG_IN', usuarioEmail: email})           
        }).catch(erro => {

            setMsgTipo('erro')
        })


    }


    return (
        <div className="row">
            <div className="col s12">
                <form className="col s12">

                {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='cadastrarAluno' /> : null}

                    <div className="card2 card horizontal z-depth-4">
                        <div className="close">
                            <div className="row">
                                <div className="col s12">
                                    <Link to="/" className="tooltipped" data-position="bottom" data-tooltip="Voltar"><i className="close fas fa-times" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="box center-align">
                            <img className="responsive-img center-align animated faster zoomIn faster" alt="" src={welcome} />
                        </div>
                        <div className="card-content">
                            <div className="center-align">
                                <img className="logo responsive-img animated faster bounceInDown faster" alt="" src={logo} />
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix"><i className="fas fa-user"></i></i>
                                    <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" className="validate" />
                                    <label htmlFor="email">Insira seu email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix" ><i className="fas fa-lock"></i></i>
                                    <input onChange={(e) => setSenha(e.target.value)} id="password" type="password" className="validate" />
                                    <label htmlFor="password">Insira sua senha</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 center-align">
                                    <div className="botao">
                                        <button onClick={logar} type="button">Entrar</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <br />
                                <div className="col s12 center-align">
                                    <p className="texto">Crie sua conta &nbsp;<Link to='novo-usuario' className="link animated faster zoomIn faster">Inscrever-se&nbsp;<Emoji text=":)" /></Link></p>
                                    <p className="center-align">Recuperar Senha &nbsp;<Link to="recuperar-senha" className="link">Clique Aqui&nbsp;<Emoji text="🙄" /></Link></p>
                                </div>
                                <div>
                                    {
                                        msgTipo === 'sucesso' && <p>logado</p>
                                    }
                                    {
                                        msgTipo === 'erro' && <p>erro</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;