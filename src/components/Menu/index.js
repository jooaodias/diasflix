import React from 'react'
import Logo from '../../assets/img/diasflix_logo.png';
import './menu.css'
import Button from '../Button';
// import ButtonLink from './components/ButtonLink'

function index (){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="DiasFlix logo" />
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default index
