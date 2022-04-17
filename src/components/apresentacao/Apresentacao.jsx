import React from "react";
import svg from '../../images/svg_programmer.svg'
import './Apresentacao.css'

export default (props) => {
    return (
        <div id="apresentacao">

            <div className="conteudo">
                <h2>Júlio <span className="cor">César</span> </h2>
                <p>Desenvolvedor Front-end</p>

                <a href=""> <button className="botao">Entrar em contato</button> </a>
                <a href=""> <button className="botao">CV</button> </a>
            </div>

            <div className="svg">
                <img src={svg} width="500" alt="" />
            </div>

        </div>
    )
}