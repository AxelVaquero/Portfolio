import AudiovisualArticle from "../components/audiovisualArticle/AudiovisualArticle";
import ContentWrapper from "../components/content/ContentWrapper";
import HeaderSection from "../components/headerSection/HeaderSection";
import Menu from "../components/menu/Menu";
import "./common.css";

import styled from "styled-components";
import { useEffect } from "react";

import data from '../api/Audiovisual.json';
import moment from "moment";


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

export default function Audiovisual() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = data.map((article) => {
    return {
      title: article.title,
      description: article.description,
      date: new Date(moment(article.date, "DD/MM/YYYY").format('L')),
      file: article.file,
      href: article.href
    }
  }).sort((a, b) => {
    return b.date - a.date;
  });




  return (
    <div>
      <Menu />

      <HeaderSection
        title="Audiovisual"
        backgroundColor="#593119"

      />
      <ContentWrapper>
        <S.ArticleWrapper>
          {articles.map((article, key) => (
            <AudiovisualArticle article={article} key={key} />
          ))}
        </S.ArticleWrapper>
      </ContentWrapper>
    </div>
  );
}
