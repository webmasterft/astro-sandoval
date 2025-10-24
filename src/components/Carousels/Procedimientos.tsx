import { useEffect, useState } from "react";
import { fetchGraphQL } from "../../services/wp-data";
import { CAROUSEL_PROCEDIMIENTOS_QUERY } from "../../graphql/Carousel-procedimientos";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import plus.svg from public folder
const plusIcon = "/plus.svg";

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
      <h2 className="section-title text-center pt-6">Mis servicios:</h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={6}
        navigation={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className=" "
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="w-full">
            <a
              className="flex flex-col items-center max-w-[122px] text-center hover:text-tertiary"
              href={item.boton?.url}
            >
              <img
                src={plusIcon}
                alt="plus"
                width="30 "
                height="82"
                className="mt-2"
              />
              <p className="text-primary text-[16px] leading-[18px] md:text-[18px] md:leading-[20px] font-bold mb-[10px] -mt-[5px] uppercase h-[60px] overflow-hidden">
                <span
                  dangerouslySetInnerHTML={{ __html: item.titulo || "" }}
                ></span>
              </p>
              {item?.imagenProcedimientos?.node?.mediaItemUrl && (
                <img
                  src={item.imagenProcedimientos.node.mediaItemUrl}
                  alt={item.titulo || ""}
                  width="122px"
                  height="126px"
                  className="h-[126px] object-cover rounded-md"
                  loading="lazy"
                />
              )}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
