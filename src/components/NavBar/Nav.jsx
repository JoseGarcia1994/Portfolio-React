import { navMenu } from "../../data/index.js";
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav id="nav">
      <ul className={styles.navbarLinks} id="links">
        {navMenu.map(link => (
          <li key={link.name}>
            <a
              className={styles.navbarItems}
              href={link.href}>{link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;