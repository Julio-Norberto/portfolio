import React from "react";
import svg from '../../images/svg2.svg'
import './Apresentacao.css'

export default (props) => {
    return (
        <div id="apresentacao">

            <div className="conteudo">
                <h2>Júlio <span className="cor3">Norberto</span> </h2>
                <p>Desenvolvedor Front-end</p>

                <a target="_blank" href="https://api.whatsapp.com/send?phone=5581997187061&text=Ol%C3%A1%2C%20J%C3%BAlio!"> <button className="botao">Entrar em contato</button> </a>
                <a target="_blank" href="https://www.linkedin.com/in/julio-cesar-n/"> <button className="botao">LinkedIn</button> </a>
            </div>

            <div className="svg">
                <img className="porra" src={svg} alt="" />
            </div>

        </div>
    )
}
