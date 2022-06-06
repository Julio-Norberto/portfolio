import React from "react";
import valentes from '../../images/valentes.png'
import rocketNft from '../../images/rocket-nft.png'
import feedwidget from '../../images/feed2.png'

import './Projetos.css'

export default (props) => {
    return (
        <div id="projetos">

            <div className="projeto">
                    <div className="img-valente">
                        <img src={valentes} width="100%" height="213" alt="" />
                    </div>

                    <div className="margin-parag">
                        Este projeto foi feito para um ONG da minha cidade que cuida de animais de rua. Neste projeto utilizei <span className="cor">HTML5</span> e <span className="cor">CSS3</span>.
                    </div>

                    <div className="div-botoes">
                        <a target="_blank" href="https://valentes-de-sirinhaem.herokuapp.com/"><button className="botoes-projeto">Acessar</button></a>
                        <a target="_blank" href="https://github.com/JulioCesarNSM/valentes-sirinhaem"><button className="botoes-projeto">Github</button></a>
                    </div>
                </div>

                <div className="projeto">
                    <div>
                        <img src={rocketNft} width="100%" alt="" />
                    </div>

                    <div className="margin-parag">
                        Este projeto foi feito com <span className="cor">React JS</span>. Trata-se de uma plataforma fictícia de venda de NFT, um exercício proposto pela RocketSeat.
                    </div>

                    <div className="div-botoes">
                        <a target="_blank" href="https://efficient-sloth-d85.notion.site/Desafio-Rocket-NFTs-3b5703b9f0e74cb19f34a8bfd14faacb"><button className="botoes-projeto">Acessar</button></a>
                        <a target="_blank" href="https://github.com/JulioCesarNSM/rocket-nfts"><button className="botoes-projeto">Github</button></a>
                    </div>

                </div>

                <div className="projeto">
                    <div>
                        <img className="centro" src={feedwidget} width="70%" alt="" />
                    </div>

                    <div className="margin-parag">
                         É um projeto onde você pode relatar bugs ou ideias em um site ou aplicação web. as Tecnologias usadas foram: <span className="cor"> React, TypeScrip, Tailwindcss, Jest e Prisma </span> 
                    </div>

                    <div className="div-botoes">
                        <span><a target="_blank" href="https://nlw-feedwidget.vercel.app/"><button className="botoes-projeto margin-b">Acessar</button></a></span>
                        <span><a target="_blank" href="https://github.com/JulioCesarNSM/NLW-Feedwidget"><button className="botoes-projeto margin-b">Github</button></a></span> 
                    </div>

                </div>

        </div>
    )
}