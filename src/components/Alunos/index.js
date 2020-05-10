import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function AlunosCad({id, nome }) {

    return (
        <>
            <tr>
                <td style={{paddingLeft: '20px'}}>
                   
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span className="id">
                        {id}
                        </span>
                    </label>
                </td>
                <td className="tt">
                    {nome}
                </td>
                <td>
                    <div className="tt grey lighten-3 btn-small">
                        <Link to={"/perfilAluno/" + id} className="texto black-text">&nbsp;Editar&nbsp;</Link>
                    </div>
                    <div className="tt grey lighten-2 btn-small">
                    <Link to={"/perfilAluno/" + id} className="texto black-text">Excluir</Link>
                    </div>
                </td>
            </tr>

        </>
    )
}

export default AlunosCad;