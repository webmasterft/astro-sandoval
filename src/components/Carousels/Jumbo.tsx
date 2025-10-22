import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Slide {
  imagenDeFondoDesktop?: {
    node?: {
      mediaItemUrl?: string;
      altText?: string;
    };
  };
  titulo?: string;
  subtitulo?: string;
  descripcion?: string;
}

export interface Props {
  data?: Slide[];
}

export default function SwiperCarousel({ data }: Props) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className="jumbo md:h-[500px]"
      modules={[Pagination, A11y]}
      pagination={{ clickable: true }}
    >
      {data?.map((slide, index) => (
        <SwiperSlide key={index} className="w-full">
          {slide?.imagenDeFondoDesktop?.node?.mediaItemUrl && (
            <img
              src={slide.imagenDeFondoDesktop.node.mediaItemUrl}
              alt={slide.imagenDeFondoDesktop.node.altText || ""}
              width="100%"
              height="500px"
              className="h-auto md:absolute md:top-0 md:left-0 md:z-0 md:h-full md:object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
            />
          )}
          <div className="container content h-full relative z-10 w-full mt-[30px] md:-mt-0 md:flex md:justify-end md:items-end flex-wrap flex-col">
            <div className="text-center md:text-left w-full md:min-h-[235px] md:max-w-[400px] mb-[50px]">
              {slide?.titulo && (
                <h2 className="text-primary text-[30px] leading-[36px] md:text-[44px] md:leading-[48px] font-bold mb-[10px]">
                  {slide.titulo}
                </h2>
              )}
              {slide?.subtitulo && (
                <h3 className="text-secondary text-[14px] leading-[16px] md:text-[20px] md:leading-[24px] font-medium mb-[10px] md:max-w-[294px] flex items-center gap-[10px] justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.958"
                    height="27.03"
                    viewBox="0 0 23.958 27.03"
                  >
                    {" "}
                    <path
                      id="Arrow_Green"
                      d="M25.643,47.348l9.7-5.6,9.882-5.7-.005,0a2.1,2.1,0,0,0,0-3.628l.005,0-9.882-5.7-9.96-5.752v.005A2.1,2.1,0,0,0,22.317,23V45.439c-.007.068-.011.139-.011.211s0,.142.011.211v.074l.008-.005a2.1,2.1,0,0,0,3.318,1.414Z"
                      transform="translate(-22.306 -20.717)"
                      fill="#41ba00"
                    ></path>{" "}
                  </svg>
                  {slide.subtitulo}
                </h3>
              )}
              {slide?.descripcion && (
                <p className="text-primary text-[14px] leading-[16px] md:text-[18px] md:leading-[22px] font-extrabold mb-[10px] md:max-w-[350px]">
                  {slide.descripcion}
                </p>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
