import styled from "styled-components";
import PropTypes from "prop-types";
import "./article.css";
import SoundCloudPlayer from "./SoundCloudPlayer";
import ReactPlayer from "react-player";

const S = {
  ArticleWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
  `,
  ArticleImage: styled.div`
    width: 100%;
    overflow: hidden;
    /* ReactPlayer handles height */
  `,
  ArticleText: styled.div`
    padding: 2em;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    h1 {
      font-family: var(--font-display);
      font-size: 2.5em;
      font-weight: normal;
      margin-bottom: 0.5em;
      line-height: 1.2;
    }
    p {
      font-size: 1.1em;
      line-height: 1.6;
      text-align: justify;
      color: #4a4a4a;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1.5em 2em;
    border-top: 1px solid #eee;
    margin-top: auto;
  `,
  Button: styled.button`
    background-color: transparent;
    color: var(--secondary-color);
    padding: 0.5em 0;
    font-size: 1.1em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    border: none;
    position: relative;
    transition: color 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--secondary-color);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--primary-color);
    }
    
    &:hover::after {
      width: 100%;
      background-color: var(--primary-color);
    }
  `,
  Date: styled.span`
    font-size: 0.9em;
    font-weight: 500;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
  `
};

export default function AudiovisualArticle({ article }) {
  const isSoundCloud = article.href.includes("soundcloud.com");

  return (
    <S.ArticleWrapper>
      <S.ArticleImage>
        {isSoundCloud ? (
          <SoundCloudPlayer url={article.href} />
        ) : (
          <ReactPlayer src={article.href} width="100%" />
        )}
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
    href: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
  }).isRequired,
};
