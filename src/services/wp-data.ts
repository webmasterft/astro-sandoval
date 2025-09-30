// src/services/wp-data.ts

// Define your GraphQL endpoint
const GRAPHQL_ENDPOINT = "https://drbernardosandoval.com/graphql";

/**
 * Fetches data using a standard GraphQL POST request.
 * @param query The GraphQL query string.
 * @returns The data object from the GraphQL response.
 */
export {};

export async function fetchGraphQL(query: string): Promise<any> {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });

    if (!response.ok) {
      throw new Error(`GraphQL network error: ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
      throw new Error("GraphQL query returned errors.");
    }

    return result.data;
  } catch (error) {
    console.error("Error in fetchGraphQL:", error);
    return null; // Return null on failure
  }
}
