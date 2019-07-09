import React from 'react'
import { Query, Mutation } from 'react-apollo'

import { BUSCAR_PET, ATUALIZAR_PET } from '../../../graphql/pets'
import petsApi from '../../../api/pets'

class Alterar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: '', 
      donoId: '', 
      tipo: '', 
      observacoes: ''
    }

    this.gerenciarMudancas = this.gerenciarMudancas.bind(this)
  }


  gerenciarMudancas(evento) {
    const chave = evento.target.name
    const valor = chave === 'donoId' ? Number(evento.target.value) : evento.target.value
    this.setState({ [chave]: valor })
  }

  gerenciarEnvio(atualizarPet, evento) {
    evento.preventDefault()
    const { id } = this.props.match.params

    atualizarPet({
      variables: {
        ...this.state,
        id
      }
    })
    this.props.history.push('/pets')
  }

  render() {
    return (
      <div>
        <h1>Alterar Pet</h1>
        <Query query={BUSCAR_PET} variables={{ id: this.props.match.params.id }}>
          {({carregando, erro, data}) => {
            const pet = data.pet || this.state
            console.log('state', this.state, 'pet', pet)
            return (
              <Mutation mutation={ATUALIZAR_PET}>
                {(atualizarPet, { carregando, erro, dados }) => (
                  <form onSubmit={this.gerenciarEnvio.bind(this, atualizarPet)}>
                    <div>
                      <label htmlFor="nome">Nome</label>
                      <input type="text" name="nome" id="nome" value={this.state.nome || pet.nome} onChange={this.gerenciarMudancas} />
                    </div>
                    <div>
                      <label htmlFor="donoId">donoId</label>
                      <input type="text" name="donoId" id="donoId" value={this.state.donoId || Number((pet.dono || {id: ''}).id) } onChange={this.gerenciarMudancas} />
                    </div>
                    <div>
                      <label htmlFor="tipo">tipo</label>
                      <input type="text" name="tipo" id="tipo" value={this.state.tipo || pet.tipo} onChange={this.gerenciarMudancas} />
                    </div>
                    <div>
                      <label htmlFor="observacoes">observacoes</label>
                      <input type="text" name="observacoes" id="observacoes" value={this.state.observacoes || pet.observacoes} onChange={this.gerenciarMudancas} />
                    </div>

                    <button type="submit">Enviar</button>
                  </form>
                )}
              </Mutation>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Alterar