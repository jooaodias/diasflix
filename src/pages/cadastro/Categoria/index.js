import React from 'react'
import PageDefaulft from '../../../components/pageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
      <PageDefaulft>
          <h1>Cadastro de Categoria</h1>

          <Link to="/">
              Ir pra home
          </Link>
      </PageDefaulft>
    )
  }

  export default CadastroCategoria;