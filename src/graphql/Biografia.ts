export {};
// Export the query as a string constant
export const BIOGRAPHY_QUERY = `
    query BiographyContent {
  page(id: "/biografia/", idType: URI) {
    title
    content(format: RENDERED)
    bio {
      bio {
        boton {
          target
          title
          url
        }
        informacion
        pdfBio {
          node {
            link
          }
        }
        titulo
        subtitulo
        titulos {
          credenciales
          titulo
        }
      }
      fieldGroupName
    }
  }
}
`;
