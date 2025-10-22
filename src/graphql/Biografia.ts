export {};
import { METADATA_FRAGMENT } from "./fragments/metadata";
export const BIOGRAPHY_QUERY = `
${METADATA_FRAGMENT}
    query BiographyContent {
  page(id: "/biografia/", idType: URI) {
    title
    content(format: RENDERED)
    seo {
      ...MetadataFields
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
