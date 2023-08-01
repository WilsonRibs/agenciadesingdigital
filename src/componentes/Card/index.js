import React from "react";
import './style.css'

export default function Card(props){
   
    return(
        <div id="cards" className={props.modoDark ? 'modo-escuro-cards' : 'modo-claro-cards'}>
            <p className="paragrafo1">{ props.data }</p>
            <h4>{ props.titulo }</h4>
            <p className="paragrafo2">{ props.empresa }</p>
            <p>{ props.paragrafo }</p>

        </div>
    )
}