import React from "react";
import './style.css'
import moon from '../../assets/moon.png'
import logo from '../../assets/logo.png'
import sun from '../../assets/sun.png'


export default function Topo(props){
    

    return(
        <header className={props.modoDark ? 'modo-escuro' : 'modo-claro'}>
            <img className='logo'src={logo} alt="Logo"/>
            
            <button onClick={props.alterarModo} className={props.modoDark ? 'modo-escuro' : 'modo-claro'}>
                <img className='botao-icone' src={props.modoDark ? sun : moon} alt="Modo Escuro" />
            </button>
        </header>
    )
}