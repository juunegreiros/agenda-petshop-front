import { restApi, opcoes } from './config'

const listarClientes = () => 
  fetch('http://localhost:4000/', opcoes(`{
  clientes {
   	id
    nome
    cpf
  }}`))
    .then(resposta => resposta.json())
    .then(dados => dados.data.clientes)

const buscarClientePorId = id => 
  fetch('http://localhost:4000/', opcoes(`{
  cliente(id: ${id}) {
   	id
    nome
    cpf
  }}`))
    .then(resposta => resposta.json())
    .then(dados => dados.data.cliente)

const adicionarCliente = cliente => 
  fetch('http://localhost:4000/', opcoes(`mutation {
    adicionarCliente(nome: "${cliente.nome}", cpf: "${cliente.cpf}") {
      id
      nome
      cpf
    }}`))
    .then(resposta => resposta.json())
    .then(dados => dados)

const alterarCliente = (id, cliente) =>
  fetch('http://localhost:4000/', opcoes(`mutation {
    atualizarCliente(id: ${id}, nome: "${cliente.nome}", cpf: "${cliente.cpf}") {
      id
      nome
      cpf
    }}`))
    .then(resposta => resposta.json())
    .then(dados => dados)

const removerCliente = id => 
  fetch('http://localhost:4000/', opcoes(`mutation {
    deletarCliente(id: ${id})}`))


export default {
  listarClientes,
  buscarClientePorId,
  adicionarCliente,
  alterarCliente,
  removerCliente
}