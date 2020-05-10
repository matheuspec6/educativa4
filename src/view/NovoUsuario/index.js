import React, { useState, Component } from 'react';
import logo from './logo.png'
import welcome from "./registrar.png"
import Swal from 'sweetalert2';
import M from 'materialize-css';

import { Link } from 'react-router-dom';

import firebase from 'firebase';
import '../../config/firebase';
import 'firebase/auth';

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

function NovoUsuario() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();
    

    function cadastrar() {

        setCarregando(1);
        setMsgTipo(null);


        if (!email || !senha) {
            setMsgTipo('erro');
            setMsg('Você precisa informar o email e senha para fazer o cadastro!')
        }
        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Seus cadastro foi concludo',
                showConfirmButton: false,
                timer: 3500,
                showClass: {
                    popup: 'animated fadeInDown faster'
                  },
                  hideClass: {
                    popup: 'animated fadeOutUp faster'
                  }
              })

              setTimeout(() =>{
                window.location.replace("/");
              },5000)


        }).catch(erro => {

            setCarregando(0)

            setMsgTipo('erro');

            switch (erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter pelo menos 6 caracteres!');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Este email já está sendo utilizado por outro usuário!');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('O formato do seu email é inválido!');
                    break;
                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                    break;
            }
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
                                <h5 >CADASTRO</h5>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix"><i className="fas fa-user"></i></i>
                                    <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" className="validate" />
                                    <label htmlFor="email">Insira seu email para cadastro</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix" ><i className="fas fa-lock"></i></i>
                                    <input onChange={(e) => setSenha(e.target.value)} id="password" type="password" className="validate" />
                                    <label htmlFor="password">Insira sua senha para cadastro</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="caixa col s12 center-align">
                                    <div className="botao">
                                        {
                                            carregando ?
                                                <div className="col s12" style={{marginTop: '-45px'}}>
                                                    <div class="preloader-wrapper medium active">
                                                        <div class="spinner-layer spinner-yellow">
                                                            <div class="circle-clipper left">
                                                                <div class="circle"></div>
                                                            </div><div class="gap-patch">
                                                                <div class="circle"></div>
                                                            </div><div class="circle-clipper right">
                                                                <div class="circle"></div>
                                                            </div>
                                                        </div>
                                                        <div class="spinner-layer spinner-green">
                                                            <div class="circle-clipper left">
                                                                <div class="circle"></div>
                                                            </div><div class="gap-patch">
                                                                <div class="circle"></div>
                                                            </div><div class="circle-clipper right">
                                                                <div class="circle"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : <button onClick={cadastrar} type="button">Cadastrar</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col s12">
                                {msgTipo === 'erro' &&  <p className="msg">Ops! {msg} &#128546;  </p>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default NovoUsuario;