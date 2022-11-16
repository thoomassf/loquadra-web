import styles from './Header.module.css';

import loquadraLogo from '../assets/loquadraLogo.svg';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={loquadraLogo} alt="Logotipo do Loquadra" />
        <h2>LoQuadra</h2>
      </div>
      
      <div className={styles.menu}>
        <a href='#overview' className={styles.ancora}>Como Funciona ?</a>
        <a href='#about' className={styles.ancora}>Sobre</a>
        <a href="#authors" className={styles.ancora}>Autores</a>
      </div>
    </header>  
  );
}