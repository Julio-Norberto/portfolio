import React from "react";
import ProjetosUni from "./Projetos-uni";
import './Projetos.css'

export default (props) => {
    return (
        <div id="container-projetos">
           
            <div className="titulo">
                <h1>Alguns dos meus Projetos</h1>
            </div>

            <div>
                <ProjetosUni />
            </div>

        </div>
    )
}