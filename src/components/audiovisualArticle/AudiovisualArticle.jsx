import styled from "styled-components";
import PropTypes from "prop-types";
import "./article.css";
import ReactPlayer from "react-player";

const S = {
  ArticleWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  `,
  ArticleImage: styled.div`
    height: 25em;
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  `,
  ArticleText: styled.div`
    padding: 2em;
    h1 {
      font-size: 3.5em;
      font-weight: 600;
      margin-bottom: 0.5em;
    }
    p {
      font-size: 1.5em;
      text-align: justify;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2em;
  `,
  Button: styled.button`
    background-color: inherit;
    color: black;
    padding: 0.5em 1em;
    font-size: 1.5em;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  `,
  Date: styled.span`
    font-size: 0.8em;
    font-weight: 600;
    padding: 1em;`
};

export default function AudiovisualArticle({article}) {


  return (
    <S.ArticleWrapper>
      <S.ArticleImage>
        <ReactPlayer url={article.url} width="100%"/>
      </S.ArticleImage>
      <S.ArticleText>
        <h1 className="article-title">{article.title}</h1>
        <p className="article-description">{article.description}</p>
      </S.ArticleText>
      <S.ButtonWrapper>
        <S.Date>{article.date.toLocaleDateString()}</S.Date>
      </S.ButtonWrapper>
    </S.ArticleWrapper>
  );
}

AudiovisualArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
  }).isRequired,
};
