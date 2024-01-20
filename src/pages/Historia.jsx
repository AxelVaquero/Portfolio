import HeaderSection from "../components/headerSection/HeaderSection";
import Menu from "../components/menu/Menu";
import "./common.css";
import { GiSpartan } from "react-icons/gi";
import styled from "styled-components";
import Article from "../components/article/Article";
import ContentWrapper from "../components/content/ContentWrapper";
const S = {
  ArticleWrapper: styled.div`
    margin-top: 3rem;
    display: grid;
    gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    justify-items: center;
    align-items: center;
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  `,
};
export default function Historia() {
  const articles = [
    {
      foto: "https://www.ancient.eu/img/r/p/500x600/103.jpg?v=1606405793",
      titulo: "Historia de Esparta",
      texto:
        "La historia de Esparta se extiende desde la Edad del Bronce hasta la conquista romana de Grecia en el 146 a. C. Esparta surgió como una entidad política en el siglo X a. C., cuando los invasores dorios subyugaron a la población local. Alrededor del 650 a. C., la ciudad-estado se convirtió en una potencia militar dominante en la península griega y sometió a la mitad de la península del Peloponeso antes de 500 a. C. Fue durante este período que Esparta construyó su famosa sociedad militarista. La sociedad espartana fue descrita por Heródoto como «la más fuerte» (krátistos), «la más libre» (eleútherotatos) y «la más militarista» (stratiōtatē) entre todos los griegos. Esparta dominó la Liga del Peloponeso desde su fundación en el 550 a. C. hasta su derrota por parte de Tebas en el 371 a. C.",
    },
    {
      foto: "https://www.ancient.eu/img/r/p/500x600/123.jpg?v=1606405793",
      titulo: "Historia del Imperio Persa",
      texto:
        "El Imperio persa fue un estado antiguo de Irán que se formó en el siglo VI a. C. bajo el liderazgo de Ciro II el Grande. Este imperio fue uno de los más grandes que el mundo antiguo conoció, llegando a abarcar desde el mar Mediterráneo hasta el río Indo. El Imperio persa fue el primer imperio mundial en la historia que gobernó sobre poblaciones de diferentes religiones, culturas y lenguas.",
    },
    {
      foto: "https://www.ancient.eu/img/r/p/500x600/106.jpg?v=1606405793",
      titulo: "Historia de la Antigua Roma",
      texto:
        "La historia de la Antigua Roma abarca el periodo desde la fundación de la ciudad de Roma en el 753 a. C. hasta la caída del Imperio romano de Occidente en el 476 d. C. y la caída del Imperio romano de Oriente en el 1453 d. C. El término Antigua Roma se refiere a la civilización romana que se desarrolló en esta ciudad-Estado, ubicada en la península Itálica, en la Antigüedad. La civilización romana fue una de las más extensas de la Antigüedad clásica. Su legado cultural abarca desde la lengua latina, hasta la religión, la filosofía, el arte, la literatura, la arquitectura, la ingeniería, la tecnología y el derecho.",
    },
  ];
  return (
    <div>
      <Menu />

      <HeaderSection
        title="Historia"
        backgroundColor="#593119"
        icon={<GiSpartan />}
      />
      <ContentWrapper>
        <S.ArticleWrapper>
          {articles.map((article, key) => (
            <Article article={article} key={key} />
          ))}
        </S.ArticleWrapper>
      </ContentWrapper>
    </div>
  );
}
