// src/graphql/menu-queries.ts

export {};
// Export the query as a string constant
export const PRIMARY_MENU_QUERY = `
    query PrimaryMenuQuery {
      menuItems(where: {location: PRIMARY}, first: 100) {
        nodes {
          id
          label
          uri
          path
          parentDatabaseId 
          childItems {
            nodes {
              id
              label
              uri
              path
              parentDatabaseId 
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
