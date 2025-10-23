import { useEffect, useState } from "react";
import { fetchGraphQL } from "../../services/wp-data";
import { CAROUSEL_PROCEDIMIENTOS_QUERY } from "../../graphql/Carousel-procedimientos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Item structure
export type ProcedimientoItem = {
  titulo?: string;
  imagenProcedimientos?: {
    node?: {
      mediaItemUrl?: string;
    };
  };
  boton?: {
    title?: string;
    url?: string;
    target?: string;
  };
};

// Response structure
export interface ProcedimientosLayout {
  itemsProcedimientos?: ProcedimientoItem[];
}

export interface ProcedimientosResponse {
  page?: {
    home?: {
      home?: ProcedimientosLayout[];
    };
  };
}

export default function Procedimientos() {
  const [data, setData] = useState<ProcedimientoItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result: ProcedimientosResponse = await fetchGraphQL(
        CAROUSEL_PROCEDIMIENTOS_QUERY
      );
      const layouts = result.page?.home?.home ?? [];
      const procedimientos =
        layouts.find((h) => h.itemsProcedimientos)?.itemsProcedimientos || [];
      console.log("Procedimientos data (client):", procedimientos);
      setData(procedimientos);
    }
    fetchData();
  }, []);

  return (
    <section className="container">
      <h2 className="section-title text-center py-6">Mis servicios:</h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        className=" "
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="w-full">
            {item?.imagenProcedimientos?.node?.mediaItemUrl && (
              <picture>
                <img
                  src={item.imagenProcedimientos.node.mediaItemUrl}
                  alt={item.titulo || ""}
                  width="100%"
                  height="500px"
                  className="h-[400px] object-cover md:absolute md:top-0 md:left-0 md:z-0 md:h-full"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                />
              </picture>
            )}
            <div className="container content h-full relative z-10 w-full mt-[30px] md:-mt-0 md:flex md:justify-end md:items-end flex-wrap flex-col">
              <div className="text-center md:text-left w-full md:min-h-[235px] md:max-w-[400px] mb-[50px]">
                {item?.titulo && (
                  <h2 className="text-primary text-[30px] leading-[36px] md:text-[44px] md:leading-[48px] font-bold mb-[10px]">
                    {item.titulo}
                  </h2>
                )}
                {/* boton example usage */}
                {item?.boton?.title && (
                  <a
                    href={item.boton.url}
                    target={item.boton.target}
                    className="btn"
                  >
                    {item.boton.title}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
