import React from "react";

import './style.css'

export default function Banner(props){
    return(
        <section className={props.modoDark ? 'modo-escuro-banner' : 'modo-claro-banner'} id="secao-banner">
            <div id="banner-imagem"></div>
            <div className="banner-texto">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}