export {};

export const CAROUSEL_PROCEDIMIENTOS_QUERY = `
query procedimientos {
  page(id: "/home/", idType: URI) {
    home {
      home {
        ... on HomeHomeSliderProcedimientosLayout {
          itemsProcedimientos {
            boton {
              target
              title
              url
            }
            imagenProcedimientos {
              node {
                mediaItemUrl
              }
            }
            titulo
          }
        }
      }
    }
  }
}
`;
