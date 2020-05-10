import React from "react";
import './sidebar.css';

function  NavBar() {

    return (
     
   <>
   <nav className="white">
      <div className="wrap">
        <div className="search">
            <input type="text" className="browser-default searchTerm" placeholder="Pesquise o nome do aluno" />
            <div type="submit" className="searchButton">
              <i className="fa fa-search" style={{marginBottom: "10px"}}></i>
          </div>
        </div>
      </div>
      </nav>
      
      </>
    );

}
export default NavBar;