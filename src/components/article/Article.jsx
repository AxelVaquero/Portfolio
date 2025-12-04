import styled from "styled-components";
import PropTypes from "prop-types";
import "./article.css";

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
    height: 250px;
    width: 100%;
    overflow: hidden;
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease;
    }
    ${styled.div}:hover & img {
      transform: scale(1.05);
    }
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
    justify-content: space-between;
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

export default function Article({ article, type }) {

  const handleClick = (url) => {
    const link = document.createElement('a')
    link.href = `/Portfolio/assets/${type === 'historia' ? 'historia' : 'periodismo'}/${url}`
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.click()
  }

  return (
    <S.ArticleWrapper>
      <S.ArticleImage>
        <img src={`/Portfolio/assets/${type === 'historia' ? 'historia' : 'periodismo'}/${article.image}`} alt={article.title} />
      </S.ArticleImage>
      <S.ArticleText>
        <h1 className="article-title">{article.title}</h1>
        <p className="article-description">{article.description}</p>
      </S.ArticleText>
      <S.ButtonWrapper>
        <S.Date>{article.date.toLocaleDateString()}</S.Date>
        <S.Button onClick={() => handleClick(article.file)}>Leer Más</S.Button>
      </S.ButtonWrapper>
    </S.ArticleWrapper>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  }).isRequired,
  type: PropTypes.string
};
