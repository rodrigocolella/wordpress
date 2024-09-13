// src/Posts.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Definir la consulta GraphQL
const OBTENER_PUBLICACIONES = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`;

function Posts() {
  const { loading, error, data } = useQuery(OBTENER_PUBLICACIONES);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Publicaciones</h1>
      <ul>
        {data.posts.nodes.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
