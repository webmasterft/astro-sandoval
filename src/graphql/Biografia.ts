export {};
// Export the query as a string constant
export const BIOGRAPHY_QUERY = `
    query BiographyContent {
  page(id: "/biografia/", idType: URI) {
    title
    content(format: RENDERED)
    seo {
          title
          metaDesc
          canonical
          opengraphTitle
          opengraphDescription
          opengraphImage {
            mediaItemUrl
          }
          # Include Twitter Card data if you use it
          twitterTitle
          twitterDescription
          twitterImage {
            mediaItemUrl
          }
          # You can add the full breadcrumbs if needed
          breadcrumbs {
            text
            url
          }
    }
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
