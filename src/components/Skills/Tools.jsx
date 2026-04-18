import { tools } from "../../data"; // o donde tengas tu info
import Article from "./Article";
import styles from "./Tools.module.css"

const Tools = () => {
  return (
    <>
      <h2 className={styles.toolsTittle}>TOOLS</h2>
      <div className={styles.articleContainer}>
        {tools.map(tool => (
            <Article key={tool.id} skill={tool} />
        ))}
      </div>
    </>
  );
};

export default Tools;