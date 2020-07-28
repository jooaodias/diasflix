import React from 'react'
import PageDefaulft from '../../../components/pageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
      <PageDefaulft>
          <h1>Cadastro de Vídeos</h1>

          <Link to="/cadastro/categoria">
              Cadastrar categoria
          </Link>
      </PageDefaulft>
    )
  }

  export default CadastroVideo;