import styled from "styled-components";
import PropTypes from "prop-types";
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
    justify-content: center;
    padding: 2em;
  `,
  Button: styled.button`
    background-color: inherit;
    color: #593119;
    border: 1px solid #593119;
    padding: 1em 2em;
    border-radius: 0.5em;
    font-size: 1.5em;
    font-weight: 600;
    cursor: pointer;
  `,
};

export default function Article({article}) {

  return (
    <S.ArticleWrapper>
      <S.ArticleImage>
        <img src={article.foto} alt={article.titulo} />
      </S.ArticleImage>
      <S.ArticleText>
        <h1>{article.titulo}</h1>
        <p>{article.texto}</p>
      </S.ArticleText>
      <S.ButtonWrapper>
        <S.Button>Leer Más</S.Button>
      </S.ButtonWrapper>
    </S.ArticleWrapper>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
  }).isRequired,
};
