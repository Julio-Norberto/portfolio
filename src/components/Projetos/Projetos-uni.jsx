import React from "react";
import valentes from '../../images/valentes.png'
import rocketNft from '../../images/rocket-nft.png'
import rocketBlog from '../../images/the-blog.png'

import './Projetos.css'

export default (props) => {
    return (
        <div id="projetos">

            <div className="projeto">
                    <div className="img-valente">
                        <img src={valentes} width="100%" height="213" alt="" />
                    </div>

                    <div className="margin-parag">
                        Este projeto foi feito para um ONG da minha cidade que cuida de animais de rua. Neste projeto utilizei <span className="cor2">HTML5</span> e <span className="cor2">CSS3</span>.
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
                        Este projeto foi feito com <span className="cor2">React JS</span>. Trata-se de uma plataforma fictícia de venda de NFT, um exercício proposto pela RocketSeat.
                    </div>

                    <div className="div-botoes">
                        <a target="_blank" href="https://efficient-sloth-d85.notion.site/Desafio-Rocket-NFTs-3b5703b9f0e74cb19f34a8bfd14faacb"><button className="botoes-projeto">Acessar</button></a>
                        <a target="_blank" href="https://github.com/JulioCesarNSM/rocket-nfts"><button className="botoes-projeto">Github</button></a>
                    </div>

                </div>

                <div className="projeto">
                    <div>
                        <img src={rocketBlog} width="100%" alt="" />
                    </div>

                    <div className="margin-parag">
                        Este projeto também é um exercício proposto pela RocketSeat. Um blog de tecnologia feito com <span className="cor2">HTML5</span> e <span className="cor2">CSS3</span>
                    </div>

                    <div className="div-botoes">
                        <span><a target="_blank" href="https://efficient-sloth-d85.notion.site/Desafio-RocketBlog-807e38809814423e80469b080444db5e"><button className="botoes-projeto">Acessar</button></a></span>
                        <span><a target="_blank" href="https://github.com/JulioCesarNSM/the-blog"><button className="botoes-projeto">Github</button></a></span> 
                    </div>

                </div>

        </div>
    )
}