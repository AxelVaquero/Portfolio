import Article from "../components/article/Article";
import ContentWrapper from "../components/content/ContentWrapper";
import HeaderSection from "../components/headerSection/HeaderSection";
import Menu from "../components/menu/Menu";
import "./common.css";

import styled from "styled-components";
import { useEffect } from "react";

import data from '../../public/api/NotasArticulos.json';


const S = {
  ArticleWrapper: styled.div`
    margin-top: 3rem;
    display: grid;
    gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: center;
    align-items: stretch;
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  `,
};

export default function Periodismo() {
  const getDate = (filename) => {
    const date = filename.split('_')
    return new Date(`${date[1]}/${date[0]}/${date[2]}`);

  }
  const articles = data.map((article) => {
    return {
      title: article.title,
      image: article.image,
      description: article.description,
      date: getDate(article.image),
      file: article.file
    }
  }).sort((a, b) => {
    return b.date - a.date;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Menu />

      <HeaderSection
        title="Periodismo"
        backgroundColor="#593119"

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
