import styles from './Article.module.css';

const Article = ({skill}) => {
  return (
    <article className={styles.article}>
      <img src={skill.img} alt="image" className={styles.articleImg} />
      <div className={styles.articleInfo}>
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>
      </div>
    </article>
  );
};

export default Article;