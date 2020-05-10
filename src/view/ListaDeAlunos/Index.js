import React, { useEffect, useState } from 'react';
import NavBar from '../../components/sidebar/NavBar';
import NavSide from '../../components/sidebar';
import AlunosCad from '../../components/Alunos';
import firebase from 'firebase'
import './listaAlunos.css'
import '../../config/firebase';


function ListaDeAlunos({match}) {

    const [alunos, setAlunos] = useState([])
    

    let listaeventos = [];

    useEffect(() => {

        firebase.firestore().collection('educativa').get().then(async (resultado) => {
                resultado.docs.forEach(doc => {
                        listaeventos.push({
                            id: doc.id,
                            ...doc.data()
                        });
            })
           setAlunos(listaeventos);
       });
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
                            <div className="card">
                                <div className="card-content white-text">
                                    <div className="row">
                                        <ul className="collection with-header">
                                            <li className="collection-header black-text"><h4 className="titulo">Lista de Alunos</h4>
                                                <li className="right-align black-text">
                                                    <div className="green btn" style={{ marginBottom: "10px" }}>
                                                        <i className="far fa-file-excel"></i>
                                                     &nbsp;exportar Excel
                                                </div>
                                                    <div className="tt red lighten-1 btn" style={{ marginBottom: "10px" }}>
                                                        <i className="fas fa-file-pdf"></i>
                                                        &nbsp;exportar PDF
                                                </div>
                                                </li>
                                            </li>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Id do Aluno:</th>
                                                        <th>Nome Completo: </th>
                                                        <th>Editar:</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="tabela black-text">
                                                    {alunos.map(item =>
                                                        <AlunosCad key={item.id} id={item.id} nome={item.nome} check={item.check} />
                                                    )}

                                                </tbody>
                                            </table>

                                        </ul>
                                        <ul className="center-align pagination" style={{marginTop: "35px"}}>
                                            <li className="waves-effect"><a href="#!"><i className="fas fa-angle-left"></i></a></li>
                                            <li className="active"><a href="#!">1</a></li>
                                            <li className="waves-effect"><a href="#!">2</a></li>
                                            <li className="waves-effect"><a href="#!">3</a></li>
                                            <li className="waves-effect"><a href="#!">4</a></li>
                                            <li className="waves-effect"><a href="#!">5</a></li>
                                            <li className="waves-effect"><a href="#!"><i className="fas fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaDeAlunos;