import React from 'react'
import { Mutation } from 'react-apollo'

import petsApi from '../../../api/pets'
import { ADICIONAR_PET } from '../../../graphql/pets'

class Novo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      donoId: '',
      tipo: '',
      observacoes: '',
    }

    this.gerenciarMudancas = this.gerenciarMudancas.bind(this)
  }

  gerenciarMudancas(evento) {
    const chave = evento.target.name
    const valor =
      chave === 'donoId' ? Number(evento.target.value) : evento.target.value
    this.setState({ [chave]: valor })
  }

  gerenciarEnvio(adicionarPet, evento) {
    evento.preventDefault()

    adicionarPet({
      variables: this.state,
    })
    this.props.history.push('/pets')
  }

  render() {
    return (
      <div>
        <h1>Novo Pet</h1>

        <Mutation mutation={ADICIONAR_PET}>
          {(adicionarPet, resposta) => (
            <form onSubmit={this.gerenciarEnvio.bind(this, adicionarPet)}>
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={this.state.nome}
                  onChange={this.gerenciarMudancas}
                />
              </div>
              <div>
                <label htmlFor="donoId">dono</label>
                <input
                  type="string"
                  name="donoId"
                  id="donoId"
                  value={this.state.donoId}
                  onChange={this.gerenciarMudancas}
                />
              </div>
              <div>
                <label htmlFor="tipo">tipo</label>
                <input
                  type="text"
                  name="tipo"
                  id="tipo"
                  value={this.state.tipo}
                  onChange={this.gerenciarMudancas}
                />
              </div>
              <div>
                <label htmlFor="observacoes">observacoes</label>
                <input
                  type="text"
                  name="observacoes"
                  id="observacoes"
                  value={this.state.observacoes}
                  onChange={this.gerenciarMudancas}
                />
              </div>

              <button type="submit">Enviar</button>
            </form>
          )}
        </Mutation>
      </div>
    )
  }
}

export default Novo
