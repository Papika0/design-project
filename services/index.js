import { request, gql } from "graphql-request";

const graphqlEndpoint = process.env.NEXT_PUBLIC_API_URL;

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const data = await request(graphqlEndpoint, query);
  return data.categories;
};
