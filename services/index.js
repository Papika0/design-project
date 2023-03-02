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

export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      posts(where: { category: { slug: $slug } }) {
        date
        description
        name
        narrowPhoto {
          url
        }
        landscapePhoto {
          url
        }
        mediumPhoto {
          url
        }
        smallPhoto {
          url
        }
        bigPhoto {
          url
        }
        category {
          name
        }
      }
    }
  `;
  const data = await request(graphqlEndpoint, query, { slug });
  return data.posts;
};
