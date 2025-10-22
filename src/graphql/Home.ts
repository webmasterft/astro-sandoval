export {};
import { METADATA_FRAGMENT } from "./fragments/metadata";
export const HOME_QUERY = `
  ${METADATA_FRAGMENT}
  query home {
    page(id: "/home/", idType: URI) {
      title
      content(format: RENDERED)
      seo {
        ...MetadataFields
      }
      home {
        __typename
        fieldGroupName
        home {
          ... on HomeHomeSliderPrincipalLayout {
            fieldGroupName
            slide {
              boton {
                target
                title
                url
              }
              descripcion
              imagenDeFondoDesktop {
                node {
                  altText
                  mediaItemUrl
                }
              }
              imagenDeFondoMobile {
                node {
                  altText
                  mediaItemUrl
                }
              }
              titulo
              subtitulo
            }
          }
        }
      }
    }
  }
`;
