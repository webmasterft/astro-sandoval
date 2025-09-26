// src/graphql/menu-queries.ts

export {};
// Export the query as a string constant
export const PRIMARY_MENU_QUERY = `
    query PrimaryMenuQuery {
      menuItems(where: {location: PRIMARY}) {
        nodes {
          id
          label
          uri
          path
          childItems {
            nodes {
              id
              label
              uri
              path
            }
          }
        }
      }
    }
`;

// You can add other queries here too, like:
/*
export const ALL_POSTS_QUERY = `
    query AllPostsQuery {
        posts {
            nodes {
                title
                slug
            }
        }
    }
`;
*/
