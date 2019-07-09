import React from 'react'
import { Link } from 'react-router-dom'
import { Query, Mutation } from "react-apollo";

import { LISTAR_PETS, DELETAR_PET } from '../../../graphql/pets'

const Pets = () => (
  <div>
    <div>
      <h1>Pets</h1>

      <Link to="/pets/novo">Novo Pet </Link>
    </div>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Dono</th>
          <th>Observações</th>
          <th>Ações</th>
        </tr>
      </thead>
      
      <tbody>
        {
          <Query
            query={LISTAR_PETS}
          >
            {
              ({ carregando, erro, data }) => {
                const pets = data.pets || []

                return pets.map(pet => (
                  <tr>
                    <td>{pet.nome}</td>
                    <td>{pet.tipo}</td>
                    <td>{pet.donoId}</td>
                    <td>{pet.observacoes}</td>
                    <td>
                      <Link to={`pets/${pet.id}`}>visualizar</Link>
                      <Link to={`pets/alterar/${pet.id}`}>alterar</Link>

                      <Mutation mutation={DELETAR_PET}>
                        {(deletarPet, { loading, error, data }) => (
                          <button onClick={() => deletarPet({ variables: { id: pet.id }})}>remover</button>
                        )
                        }

                      </Mutation>
                    </td>
                  </tr>
                ))
              }
            }
          </Query>
        }
      </tbody>
    </table>
  </div>
)

export default Pets