import React from "react";
import './Contato.css'
import contatos from '../../images/contact.svg'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'

export default (props) => {
    return (
        <div id="contato">

            <div className="img-contato">
                <img src={contatos} width="500" alt="" />
            </div>

            <div className="socials">
                <div>
                    <h1>Contato</h1>
                    <p className="margin-top">(81) 99718-7061</p>
                    <p>juliocsscl@gmail.com</p>
                </div>

                <div className="icones-sociais">
                <a className="separar" target="_blank" href="https://github.com/JulioCesarNSM"> <img src={github} width="50" alt="" /> </a>
                <a target="_blank" href="https://www.linkedin.com/in/julio-cesar-n/"> <img src={linkedin} width="50" alt="" /> </a>
                </div>

            </div>

        </div>
    )
}