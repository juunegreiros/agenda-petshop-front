import { restApi } from './config'

const listarPets = () => 
  restApi
    .get('/pets')
    .then(resposta => resposta.data)

const buscarPetPorId = id => 
  restApi
    .get(`/pets/pet/${id}`)
    .then(resposta => resposta.data[0])

const adicionarPet = pet => 
  restApi
    .post('/pets/pet', pet)
    .then(resposta => resposta.data)

const alterarPet = (id, pet) =>
  restApi
    .put(`/pets/pet/${id}`, pet)
    .then(resposta => resposta.data)

const removerPet = id => 
  restApi
    .delete(`/pets/pet/${id}`)
    .then(resposta => resposta.data)

export default {
  listarPets,
  buscarPetPorId,
  adicionarPet,
  alterarPet,
  removerPet
}