import gql from 'graphql-tag'

export const LISTAR_PETS = gql`
  query {
    pets {
      id
      nome
      tipo
      observacoes
    }
  }
`

export const BUSCAR_PET = gql`
  query user($id: ID!) {
    pet(id: $id) {
      id
      nome
      tipo
      observacoes
      dono {
        id
      }
    }
  }
`

export const ADICIONAR_PET = gql`
  mutation adicionarPet($nome: String!, $donoId: Int!, $tipo: String, $observacoes: String) {
    adicionarPet(nome: $nome, donoId: $donoId, tipo: $tipo, observacoes: $observacoes) {
      id
      nome
      tipo
      observacoes
    }
  }
`

export const ATUALIZAR_PET = gql`
  mutation atualizarPet($id: ID!, $nome: String!, $donoId: Int!, $tipo: String, $observacoes: String) {
    atualizarPet(id: $id, nome: $nome, donoId: $donoId, tipo: $tipo, observacoes: $observacoes) {
      id
      nome
      tipo
      observacoes
    }
  }
`

export const DELETAR_PET = gql`
  mutation deletarPet($id: ID!){
    deletarPet(id: $id)
  }
`