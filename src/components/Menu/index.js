import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/diasflix_logo.png';
import './menu.css'
import Button from '../Button';
// import ButtonLink from './components/ButtonLink'

function index (){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="DiasFlix logo" />
            </Link> 
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default index
