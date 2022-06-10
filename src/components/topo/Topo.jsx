import React from "react";
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import './Topo.css'

export default (props) => {
    return (
        <div id="topo">

            <div className="title-topo">
                <h1>Júlio <span className="cor" >Norberto</span></h1>
            </div>

            <div>
                <a className="separar" target="_blank" href="https://github.com/JulioCesarNSM"> <img src={github} width="30" alt="" /> </a>
                <a className="separar" target="_blank" href="https://www.linkedin.com/in/julio-cesar-n/"> <img src={linkedin} width="30" alt="" /> </a>
            </div>

        </div>
    )
}