import React,{useEffect, useState} from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';
import './sidebar.css';
import M from "materialize-css";
import user from "./user.png";
import 'hover.css';
import {useSelector} from 'react-redux';

import firebase from 'firebase'
import '../../config/firebase';
import 'firebase/auth';


function NavSide() {

  const [img, setImg] = useState();


  function uploadimg(){

    firebase.firestore().doc('perfil').get().then(img => {
      setImg(img)
    })

  }


  useEffect(() =>{
  
      var elem = document.querySelector(".sidenav");
      M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
      });
  })

    return (
      <>
          <div className="col s12">
            <ul id="slide-out" className="sidenav sidenav-fixed">
              <div className="row hvr-grow-shadow">
                <img alt="logo" className="center logo" src={logo} />
              </div>
              <li>
                <NavLink to="/dashboard" activeClassName="activeRoute" className="hvr-icon-wobble-horizontal hvr-grow-shadow">
                  <span className="icon">
                    <i className="fa fa-home hvr-icon"></i>
                  </span>
            DashBoard
          </NavLink>
                <NavLink to="/cadastrarAluno" activeClassName="activeRoute" className="hvr-icon-wobble-horizontal hvr-grow-shadow">
                  <span className="icon">
                    <i className="fas fa-graduation-cap hvr-icon"></i>
                  </span>
            Cadastrar Alunos
          </NavLink>
                <NavLink to="/listadealunos" activeClassName="activeRoute" className="hvr-icon-wobble-horizontal hvr-grow-shadow">
                  <span className="icon">
                    <i className="fas fa-user-graduate hvr-icon"></i>
                  </span>
            Lista de Alunos
          </NavLink>
                
                <a href="www.google.com" className="hvr-icon-pop hvr-grow-shadow">
                  <span className="icon">
                    <i className="fa fa-times-circle hvr-icon"></i>
                  </span>
            Sair
          </a>
              </li>
              <li>
                <br />
                <div className="user-view">
                  <a href="#user"><img alt="" className="circle" src={user} /></a>
                  <a href="#name"><span className="name yellow lighten-5">Olá seja bem vindo: </span></a>
                  <a href="#email"><span className=" email">{useSelector(state => state.usuarioEmail)}</span></a>
                </div>
              </li>
            </ul>
          </div>
        <label data-target="slide-out" className="bars sidenav-trigger"><i className="fas fa-bars"></i></label>
      </>
    );
}
export default NavSide;