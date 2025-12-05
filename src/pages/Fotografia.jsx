import ContentWrapper from "../components/content/ContentWrapper";
import HeaderSection from "../components/headerSection/HeaderSection";
import Menu from "../components/menu/Menu";
import "./common.css";

import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { useEffect } from "react";
const S = {
  GalleryWrapper: styled.div`
    margin-bottom: 6rem;
    padding: 0 1rem;
  `,
  ContentWrapper: styled.div`
    background-color: var(--background-color);
    min-height: 100vh;
  `,
  // Mimic HeaderSection style but smaller for sub-headers
  titleWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    position: relative;
  `,
  h2: styled.h2`
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    color: var(--primary-color);
    text-transform: uppercase;
    text-align: center;
    font-weight: normal;
    margin: 0;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 2px;
      background-color: var(--secondary-color);
      margin: 1rem auto 0;
      opacity: 0.7;
    }
  `,
};

export default function Fotografia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const camarga = Object.keys(
    import.meta.glob("/public/assets/images/gallery/camarga/*", {
      as: "url",
    })
  );
  const cordoba = Object.keys(
    import.meta.glob(
      "/public/assets/images/gallery/patrimonioAndaluz/cordoba/*",
      {
        as: "url",
      }
    )
  );
  const granada = Object.keys(
    import.meta.glob(
      "/public/assets/images/gallery/patrimonioAndaluz/granada/*",
      {
        as: "url",
      }
    )
  );
  const sevilla = Object.keys(
    import.meta.glob(
      "/public/assets/images/gallery/patrimonioAndaluz/sevilla/*",
      {
        as: "url",
      }
    )
  );

  const patrimonioAndaluz = [...cordoba, ...granada, ...sevilla];
  const sicilia = Object.keys(
    import.meta.glob("/public/assets/images/gallery/sicilia/*", {
      as: "url",
    })
  );

  const atenas = Object.keys(
    import.meta.glob("/public/assets/images/gallery/tourDeGrecia/atenas/*", {
      as: "url",
    })
  );

  const delfos = Object.keys(
    import.meta.glob("/public/assets/images/gallery/tourDeGrecia/delfos/*", {
      as: "url",
    })
  );

  const atenasGallery = atenas.map((image) => {
    if (image.includes("vertical")) {
      return {
        src: image.replace("/public", "/Portfolio"),
        width: 212,
        height: 320,
      };
    }
    return {
      src: image.replace("/public", "/Portfolio"),
      width: 320,
      height: 212,
    };
  });

  const delfosGallery = delfos.map((image) => {
    return {
      src: image.replace("/public", "/Portfolio"),
      width: 320,
      height: 212,
    };
  });

  const siciliaGallery = sicilia.map((image) => {
    return {
      src: image.replace("/public", "/Portfolio"),
      width: 320,
      height: 212,
    };
  });

  const camargaGallery = camarga.map((image) => {
    return {
      src: image.replace("/public", "/Portfolio"),
      width: 320,
      height: 212,
    };
  });

  const patrimonioAndaluzGallery = patrimonioAndaluz.map((image) => {
    if (image.includes("vertical")) {
      return {
        src: image.replace("/public", "/Portfolio"),
        width: 212,
        height: 320,
      };
    }
    return {
      src: image.replace("/public", "/Portfolio"),
      width: 320,
      height: 212,
    };
  });

  const gallery = [
    {
      title: "Patrimonio Andaluz",
      images: patrimonioAndaluzGallery,
    },
    {
      title: "Camarga",
      images: camargaGallery,
    },
    {
      title: "Sicilia",
      images: siciliaGallery,
    },
    {
      title: "Atenas",
      images: atenasGallery,
    },
    {
      title: "Delfos",
      images: delfosGallery,
    },
  ];
  const [index, setIndex] = useState(-1);
  const [selectedGallery, setSelectedGallery] = useState(-1);
  const handleClick = (index, galleryIndex) => {
    setIndex(index);
    setSelectedGallery(galleryIndex);
  };
  return (
    <S.ContentWrapper>
      <Menu />

      <HeaderSection
        title="Fotografía"

        style={{
          backgroundImage: `url("/Portfolio/assets/images/gallery/tourDeGrecia/atenas/14.webp")`,
          backgroundSize: "cover",
          backgroundPositionY: "44%",
        }}
      />
      <ContentWrapper>
        <>
          {gallery.map((item, i) => {
            return (
              <S.GalleryWrapper key={i}>
                <S.titleWrapper>
                  <S.h2>{item.title}</S.h2>
                </S.titleWrapper>
                <PhotoAlbum
                  layout="rows"
                  photos={item.images}
                  onClick={({ index }) => handleClick(index, i)}
                />
                <Lightbox
                  slides={item.images.map((image) => {
                    return { src: image.src };
                  })}
                  imageFit="contain"
                  open={index >= 0 && selectedGallery === i}
                  index={index}
                  close={() => {
                    setIndex(-1);
                    setSelectedGallery(-1);
                  }}
                />
              </S.GalleryWrapper>
            );
          })}
        </>
      </ContentWrapper>
    </S.ContentWrapper>
  );
}
