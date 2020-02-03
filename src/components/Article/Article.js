import React from "react";
import styles from "./Article.module.scss";

const Article = ({ article }) => {
  const { articleContainer, articleContent, articleImage } = styles;
  const { title, urlToImage, content, url, description } = article;
  return (
    <article className={articleContainer}>
      <h3>{title}</h3>
      <div className={articleContent}>
        <img
          src={urlToImage}
          alt="ArticleImage"
          loading="lazy"
          className={articleImage}
        />
        {content ? (
          <p>
            {content.split("…")[0]}
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {" "}
                ...continue reading the story
              </a>
            ) : (
              ""
            )}
          </p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </article>
  );
};

export default Article;
