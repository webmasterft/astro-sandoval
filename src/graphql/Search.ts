export const SEARCH = (search: string, amount: number) => `{
  posts(where: { search: "${search}" }, first: ${amount}) {
    nodes {
      id
      title
      uri
    }
  }
}`;
