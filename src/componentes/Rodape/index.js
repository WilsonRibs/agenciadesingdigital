import React from "react";
import logo from '../../assets/logo.png'
import face from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkeed from '../../assets/linkedin.png'
import dribble from '../../assets/dribble.png'
import behance from '../../assets/behance.png'
import google from '../../assets/google-plus.png'

import './style.css'




export default function Rodape(props){
    return(
        <footer className={props.modoDark ? "modo-escuro-rodape" : "modo-claro-rodape"}>
            <img src={logo} />
            <p className="paragrafo">
                Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.
            </p>
            <div className="iconesRodape">
                <img src={face} />
                <img src={twitter} />
                <img src={linkeed} />
                <img src={dribble} />
                <img src={behance} />
                <img src={google} />
            </div>
            <p className="copyright">Copyright 2022 <span>Wilson Ribeiro</span></p>
        </footer>
    )
}