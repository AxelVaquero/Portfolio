import ContentWrapper from "../components/content/ContentWrapper";
import HeaderSection from "../components/headerSection/HeaderSection";
import Menu from "../components/menu/Menu";
import "./common.css";
import { BsCameraFill } from "react-icons/bs";
import { Gallery } from "react-grid-gallery";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { GiSpain } from "react-icons/gi";
import { GiItalia } from "react-icons/gi";
import { GiFrance } from "react-icons/gi";
import { GiGreekTemple } from "react-icons/gi";
import { GiGreekSphinx } from "react-icons/gi";
const S = {
  GalleryWrapper: styled.div`
    margin-top: 1em;
    padding: 1em;
  `,
  ContentWrapper: styled.div`
    background-color: #f1eaea;
  `,
  h1: styled.h1`
    text-align: center;
    font-size: 5.5em;
    font-weight: 600;
    margin-bottom: 0.5em;
    @media (max-width: 768px) {
      font-size: 2em;
    }
  `,
  icon: styled.div`
    font-size: 5.5em;
    text-align: center;
    position: relative;
    padding-right: 0.5em;
    top: -0.1em;
    @media (max-width: 768px) {
      padding-right: 0;
      top: 0;
      font-size: 2.5em;
    }
  `,
  title: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    @media (max-width: 768px) {
    }
  `,
  titleWrapper: styled.div`
    display: flex;
    position: relative;
    justify-content: center;
  `,
};

export default function Fotografia() {
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
        src: image.replace("/public", ""),
        width: 212,
        height: 320,
      };
    }
    return {
      src: image.replace("/public", ""),
      width: 320,
      height: 212,
    };
  });

  const delfosGallery = delfos.map((image) => {
    return {
      src: image.replace("/public", ""),
      width: 320,
      height: 212,
    };
  });

  const siciliaGallery = sicilia.map((image) => {
    return {
      src: image.replace("/public", ""),
      width: 320,
      height: 212,
    };
  });

  const camargaGallery = camarga.map((image) => {
    return {
      src: image.replace("/public", ""),
      width: 320,
      height: 212,
    };
  });

  const patrimonioAndaluzGallery = patrimonioAndaluz.map((image) => {
    return {
      src: image.replace("/public", ""),
      width: 320,
      height: 212,
    };
  });

  const gallery = [
    {
      title: "Patrimonio Andaluz",
      images: patrimonioAndaluzGallery,
      icon: <GiSpain />,
    },
    {
      title: "Camarga",
      images: camargaGallery,
      icon: <GiFrance />,
    },
    {
      title: "Sicilia",
      images: siciliaGallery,
      icon: <GiItalia />,
    },
    {
      title: "Atenas",
      images: atenasGallery,
      icon: <GiGreekTemple />,
    },
    {
      title: "Delfos",
      images: delfosGallery,
      icon: <GiGreekSphinx />,
    },
  ];
  const [index, setIndex] = useState(-1);
  const [selectedGallery, setSelectedGallery] = useState(-1);
  console.log(index);
  const handleClick = (index, galleryIndex) => {
    setIndex(index);
    setSelectedGallery(galleryIndex);
    console.log(index, galleryIndex);
  };
  return (
    <S.ContentWrapper>
      <Menu />

      <HeaderSection
        title="Fotografía"
        icon={<BsCameraFill />}
        style={{
          backgroundImage: `url("/assets/images/gallery/tourDeGrecia/atenas/14.JPG")`,
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
                  <S.title>
                    <S.h1>{item.title}</S.h1>
                    <S.icon>{item.icon}</S.icon>
                  </S.title>
                </S.titleWrapper>
                <Gallery
                  images={item.images}
                  enableImageSelection={false}
                  onClick={(index) => handleClick(index, i)}
                  lazyLoad={true}
                  tagStyle={{
                    color: "white",
                    backgroundColor: "rgb(94, 150, 55)",
                    padding: "5px",
                  }}
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
