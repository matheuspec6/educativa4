import React, { useEffect, useState } from 'react';
import NavSide from '../../components/sidebar';
import NavBar from '../../components/sidebar/NavBar';
import M from 'materialize-css'
import './perfilAluno.css'

import firebase from 'firebase';
import '../../config/firebase';



function PerfilAluno(props) {

    const [alunos, setAlunos] = useState({})

    useEffect(() => {

        firebase.firestore().collection('educativa').doc(props.match.params.id).get().then(resultado => {

            setAlunos(resultado.data())
        })

    }, [props]);

    useEffect(() => {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el);
    })


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
                            <div class="card">
                                <div class="card-content">
                                    <p>Perfil do Aluno: </p>
                                </div>
                                <div class="card-tabs">
                                    <ul class="tabs tabs-fixed-width">
                                        <li className="tab"><a className="active" href="#test4"><i class="far fa-id-card"></i>Perfil</a></li>
                                        <li className="tab"><a href="#test6"><i class="fas fa-qrcode"></i>Status do aluno</a></li>

                                    </ul>
                                </div>
                                <div class="card-content grey lighten-4">
                                    <div id="test4">
                                        <div className="row">
                                            <label >Primeiro Nome</label>
                                            <div class="search">
                                                <p type="text" class="searchTerm"><span className="icone"><i className="fas fa-user-graduate"></i></span>{alunos.nome}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label>E-mail</label>
                                            <div class="search">
                                                <p type="text" class="searchTerm"><span className="icone"><i class="fas fa-envelope-open-text"></i></span>{alunos.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label>RG:</label>
                                            <div class="search">
                                                <p type="text" class="searchTerm"><span className="icone"><i class="far fa-user"></i></span>{alunos.rg}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label>CPF:</label>
                                            <div class="search">
                                                <p type="text" class="searchTerm"><span className="icone"><i className="far fa-address-card"></i></span>{alunos.cpf}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label>Telefone:</label>
                                            <div class="search">
                                                <p type="text" class="searchTerm"><span className="icone"><i className="fas fa-mobile-alt"></i></span>{alunos.telefone}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label>CEP:</label>
                                            <div class="search">
                                                <p type="text" class="searchTerm"><span className="icone"><i className="fas fa-map-marker-alt"></i></span>{alunos.cep}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label>Sexo:</label>
                                            <div class="search">
                                                <p type="text" class="searchTerm"><span className="icone"><i class="fa fa-venus-mars"></i></span>{alunos.sexo}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div id="test6">Test 3</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PerfilAluno;