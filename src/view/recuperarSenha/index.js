import React, { useState, Component } from 'react';
import logo from './logo.png'
import welcome from "./senha.png"
import Swal from 'sweetalert2';
import firebase from 'firebase'
import '../../config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class Click extends Component {

    componentDidMount() {

        var elems = document.querySelector('.tooltipped');
        M.Tooltip.init(elems);

    }

    render() {
        return (
            <div className="close">
                <div className="row">
                <div className="col s12">
                      <Link to="/" className="tooltipped" data-position="bottom" data-tooltip="Voltar"><i className="close fas fa-times" /></Link>
                </div>
                </div>
            </div>
        )
    }

}

function NovaSenha() {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha() {

        if (email == null) {
            setMsg('Ops! Esqueceu de inserir seu Email');
        }

        firebase.auth().sendPasswordResetEmail(email).then(resultado => {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Enviamos um link no seu email para você redefinir sua senha!',
                showConfirmButton: false,
                timer: 3500,
                showClass: {
                    popup: 'animated fadeInDown faster'
                },
                hideClass: {
                    popup: 'animated fadeOutUp faster'
                }
            })

            setTimeout(() => {
                window.location.replace("/");
            }, 5000)

        }).catch(erro => {

            setMsg('Verifique se o email está correto!');

        })
    }

    return (
        <div className="row">
            <div className="col s12">
                <form className="col s12">
                    <div className="card horizontal z-depth-4">
                        <Click />
                        <div className="box center-align">
                            <img className="responsive-img center-align animated faster zoomIn faster" alt="" src={welcome} />
                        </div>
                        <div className="card-content">
                            <div className="center-align">
                                <Link to="/"><img className="logo responsive-img animated faster bounceInDown faster" alt="" src={logo} /></Link>
                            </div>
                            <div className="card-action center-align">
                                <h5 >Recuperar Senha</h5>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix"><i className="fas fa-user"></i></i>
                                    <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" className="validate" />
                                    <label htmlFor="email">Insira seu email recuperação</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="caixa col s12 center-align">
                                    <div className="botao">
                                        <button onClick={recuperarSenha} type="button">Recuperar Senha</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 center-align">
                                    <p className="msg"> {msg} </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default NovaSenha;