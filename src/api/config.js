import axios from 'axios'
import ApolloClient from 'apollo-boost';

export const restApi = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
  }
})

export const opcoes = (valor) => ({
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: valor
  })
})

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/',
});