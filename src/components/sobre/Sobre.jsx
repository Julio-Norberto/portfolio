import React from "react";
import './Sobre.css'
import html from '../../images/html-5.png'
import css from '../../images/css-3.png'
import js from '../../images/js.png'
import git from '../../images/git.png'
import bootstrap from '../../images/bootstrap.png'
import react from '../../images/react1.png'

export default (props) => {
    return (
        <div id="sobre">

            <div className="conteudo-sobre">
                <h2>Sobre mim</h2>
                <p className="paragrafo">
                    Sou Acadêmico de redes e certificado internacionalmente em segurança da informação pela <span className="cor2">Fortinet</span>. Trabalho com desenvolvimento web a mais ou menos 1 ano. Sou um <span className="cor2">amante da tecnologia</span> motivado pela curiosidade, e também apaixonado por resolver problemas.
                </p>
            </div>

            <div id="tecnologias">
                <h2>Tecnologias</h2>
                <div className="tec-bottom">
                    <span className="ajustar-cima"><img src={html} width="50" alt="" /></span>
                    <span><img src={css} width="60" alt="" /></span>
                    <span className="ajustar"><img src={js} width="47" alt="" /></span> 
                </div>

                
                <div className="tec-bottom">
                    <span><img src={git} width="50" alt="" /></span>
                    <span><img src={bootstrap} width="50" alt="" /></span>
                    <span><img src={react} width="50" alt="" /></span>
                </div>
                
            </div>

        </div>
    )
}