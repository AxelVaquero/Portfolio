import Article from "../components/article/Article";
import ContentWrapper from "../components/content/ContentWrapper";
import HeaderSection from "../components/headerSection/HeaderSection";
import Menu from "../components/menu/Menu";
import "./common.css";
import { FaRegNewspaper } from "react-icons/fa";
import styled from "styled-components";

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

export default function Periodismo() {
  const articles = [
    {
      texto:
        "El periodismo es el oficio que consiste en recolectar, sintetizar, jerarquizar y publicar información relativa a la actualidad. Para obtener dicha información, el periodista debe recurrir obligatoriamente a fuentes verificables. El periodista se dedica profesionalmente a esta actividad, al igual que el reportero, el corresponsal o el editorialista.",
      titulo: "¿Qué es el periodismo?",
      foto: "https://www.ancient.eu/img/r/p/500x600/103.jpg?v=1606405793",
    },
    {
      foto: "https://www.ancient.eu/img/r/p/500x600/123.jpg?v=1606405793",
      titulo: "Historia del periodismo",
      texto:
        "El periodismo es una actividad que se remonta a la Antigüedad, cuando los primeros hombres comenzaron a comunicarse entre sí. Sin embargo, el periodismo moderno, tal como lo conocemos hoy, surgió en el siglo XVII, con la aparición de los primeros periódicos. En el siglo XIX, con la aparición de la imprenta, el periodismo se convirtió en una actividad más profesionalizada. En el siglo XX, con la aparición de la radio y la televisión, el periodismo se convirtió en una actividad más profesionalizada.",
    },
    {
      foto: "https://www.ancient.eu/img/r/p/500x600/106.jpg?v=1606405793",
      titulo: "Periodismo en la actualidad",
      texto:
        "En la actualidad, el periodismo se ha convertido en una actividad muy profesionalizada, con una gran cantidad de medios de comunicación y periodistas. Sin embargo, el periodismo sigue siendo una actividad muy importante, ya que es el único medio de comunicación que puede informar a la población sobre los acontecimientos que ocurren en el mundo.",
    },
  ];
  return (
    <div>
      <Menu />

      <HeaderSection
        title="Periodismo"
        backgroundColor="#593119"
        icon={<FaRegNewspaper />}
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
