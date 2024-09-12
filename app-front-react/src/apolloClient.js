// src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Crear una instancia de Apollo Client
const client = new ApolloClient({
  uri: 'http://wordpress.localhost:81/graphql', // URL de tu API GraphQL
  cache: new InMemoryCache(), // Configurar el caché
});

export default client;
