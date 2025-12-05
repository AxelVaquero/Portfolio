import HeaderSection from "../components/headerSection/HeaderSection";
import Menu from "../components/menu/Menu";
import "./common.css";

import styled from "styled-components";
import Article from "../components/article/Article";
import ContentWrapper from "../components/content/ContentWrapper";
import data from '../api/Historia.json';
import { useEffect } from "react";

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
export default function Historia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  return (
    <div>
      <Menu />

      <HeaderSection
        title="Historia"
        backgroundColor="#593119"

      />
      <ContentWrapper>
        <S.ArticleWrapper>
          {articles.map((article, key) => (
            <Article article={article} key={key} type="historia" />
          ))}
        </S.ArticleWrapper>
      </ContentWrapper>
    </div>
  );
}
