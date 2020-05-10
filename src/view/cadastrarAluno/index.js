import React, { Component, useState } from 'react';
import NavSide from '../../components/sidebar';
import M from 'materialize-css'
import $ from 'jquery';
import 'jquery-mask-plugin'
import './cadastrarAluno.css'
import NavBar from '../../components/sidebar/NavBar';
import * as cep from 'cep-promise'

import firebase from 'firebase';
import '../../config/firebase';
import { useSelector } from 'react-redux';



class FuncaoCad extends Component {

    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);

        });

        $(document).ready(function () {
            $('.cep').mask('00000-000');
            $('.rg').mask('00.000.000-0');
            $('.telefone').mask('(00) 0000-00000');
            $('.cpf').mask('000.000.000-00', { reverse: true });
        });

        cep('06266100')
            .then(console.log)

    }

    render() {
        return (
            
                <div />
            
        )
    }



}


function CadastrarAluno() {


    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [rg, setRg] = useState();
    const [cpf, setCpf] = useState();
    const [cep, setCep] = useState();
    const [arquivo, setArquivo] = useState();
    const [sexo, setSexo] = useState();

    const usuarioEmail = useSelector(state => state.usuarioEmail);

    function Cadastrar() {

        firebase.storage().ref(`docDeCadAlunos/${arquivo.name}`).put(arquivo).then(() => {

            firebase.firestore().collection("educativa").add({

                nome: nome,
                email: email,
                telefone: telefone,
                usuario: usuarioEmail,
                rg: rg,
                cpf: cpf,
                cep: cep,
                arquivo: arquivo.name,
                sexo: sexo,
                cadastroData: new Date()
            })

        })

    }



    return (
        <>
            <NavBar />
            <div className="bg row">
                <div className="col s12 m4 l3">
                    <NavSide />
                </div>

                <div className="col s12 m8 l9">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-content white-text">
                                    <span className="card-title">
                                        Cadastrar Aluno
                                            <hr />
                                    </span>
                                    <div className="form2 row">
                                        <form className="col s12">
                                            <div className="row">
                                                <div className="input-field col s11">
                                                    <i className="material-icons prefix"><i className="icon fas fa-user-graduate"></i></i>
                                                    <input onChange={(e) => setNome(e.target.value)} placeholder="Nome Completo do Aluno" id="icon primeiro_nome" type="text" className="validate" ></input>
                                                    <label htmlFor="primeiro_nome">Nome Completo:</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s11">
                                                    <i className="material-icons prefix"><i className="icon far fa-envelope"></i></i>
                                                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Insira o Email do Aluno" id="Email" type="email" className="validate" ></input>
                                                    <label htmlFor="Email">Email:</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s11">
                                                    <i className="material-icons prefix" ><i className="icon fas fa-mobile-alt"></i></i>
                                                    <input id="telefone" onChange={(e) => setTelefone(e.target.value)} placeholder="(00) 00000-0000" type="text" className="telefone validate" ></input>
                                                    <label htmlFor="telefone">Telefone:</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s11">
                                                    <i className="material-icons prefix"><i className="icon far fa-user"></i></i>
                                                    <input onChange={(e) => setRg(e.target.value)} placeholder="00.000.000/0" id="rg" type="text" className="rg validate" ></input>
                                                    <label htmlFor="rg">R.G:</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s11">
                                                    <i className="material-icons prefix"><i className="icon far fa-address-card"></i></i>
                                                    <input onChange={(e) => setCpf(e.target.value)} placeholder="000.000.000-00" id="cpf" type="text" className="cpf validate" ></input>
                                                    <label htmlFor="cpf">CPF:</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s11">
                                                    <i className="material-icons prefix"><i className="icon fas fa-map-marker-alt"></i></i>
                                                    <input onChange={(e) => setCep(e.target.value)} placeholder="00000-00" id="cep" type="text" className="cep validate" ></input>
                                                    <label htmlFor="cep">CEP:</label>
                                                </div>
                                            </div>
                                            <div className="sexo" onChange={(e) => setSexo(e.target.value)}>
                                                <p className="grey-text lighten-5 text-darken-2 " >Escolha o Sexo:</p>
                                                <label className="tt">
                                                    <input name="grupo1" type="radio" value="Masculino" />
                                                    <span>Masculino</span>
                                                </label>
                                                <label className="tt">
                                                    <input name="grupo1" type="radio" value="Feminino"/>
                                                    <span>Feminino</span>
                                                </label>
                                            </div>
                                        </form>
                                        
                                        <div className="row">
                                            <div className="file-field input-field col s11">
                                                <div className="btn">
                                                    <span>Arquivo</span>
                                                    <input onChange={(e) => setArquivo(e.target.files[0])} type="file" multiple />
                                                </div>
                                                <div className="file-path-wrapper">
                                                    <input onChange={(e) => setArquivo(e.target.files[0])} className="file-path validate" type="text" placeholder="Deseja inserir algum arquivo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-action center-align">
                                        <label className="white-text btnCadastrar btn-large waves-effect waves-light red lighten-1">Atualizar</label>
                                        <label onClick={Cadastrar} className="white-text btn-large waves-effect waves-light green darken-2">Aprovar</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FuncaoCad />
            </div>
        </>
    )
}

export default CadastrarAluno;