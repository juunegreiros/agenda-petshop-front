import React from 'react'
import petsApi from '../../../api/pets'
import { Query } from 'react-apollo'

import { BUSCAR_PET } from '../../../graphql/pets'
const Visualizar = (props) => (
  <div>
    <h1>Visualizar Pet</h1>
    <Query query={BUSCAR_PET} variables={{ id: props.match.params.id }}> 
      {({ carregando, error, data }) => {
        const pet = data.pet || {}
        return (
          <>
            <p>Nome: {pet.nome}</p>
            <p>Tipo: {pet.tipo}</p>
            <p>Dono: {pet.dono}</p>
            <p>Observações: {pet.observacoes}</p>
          </>
        )
      }}
    </Query>
  </div>
)


export default Visualizar