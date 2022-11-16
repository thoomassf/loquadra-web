import styles from './Authors.module.css';

import linkedinLogo from '../assets/linkedinLogo.svg';
import githubLogo from '../assets/githubLogo.png';

export function Authors() {
  return (
    <article className={styles.authorsContainer} id="authors">
      <strong>Autores do projeto</strong>
      <div className={styles.cardsAuthors}>
        {/* Card 1 */}
        <div className={styles.author}>
          <img 
            className={styles.authorImg}
            src="https://github.com/kariane.png" 
            alt="Foto da Kariane Coura" 
          />
          <div className={styles.authorInfo}>
            <strong>Kariane Coura</strong>
            <div className={styles.authorContacts}>
              <a className={styles.contactLinkedin} href="https://www.linkedin.com/in/karicoura/">
                <img src={linkedinLogo}/>
                <span>LinkedIn</span>
              </a>
              <a className={styles.contactGithub} href="https://github.com/kariane">
                <img src={githubLogo}/>
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
        {/* Card 2 */}    
        <div className={styles.author}>
          <img 
            className={styles.authorImg}
            src="https://github.com/thoomassf.png" 
            alt="Foto do Thomas Farias" 
          />
          <div className={styles.authorInfo}>
            <strong>Thomas Farias</strong>
            <div className={styles.authorContacts}>
              <a className={styles.contactLinkedin} href="https://www.linkedin.com/in/thomas-sf/">
                <img src={linkedinLogo}/>
                <span>LinkedIn</span>
              </a>
              <a className={styles.contactGithub} href="https://github.com/thoomassf">
                <img src={githubLogo}/>
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className={styles.author}>
          <img 
            className={styles.authorImg}
            src="https://github.com/wellingtonlira826.png"
            alt="Foto do Wellington Lira" 
          />
          <div className={styles.authorInfo}>
            <strong>Wellington Lira</strong>
            <div className={styles.authorContacts}>
              <a className={styles.contactLinkedin} href="https://www.linkedin.com/in/wellington-lira-150a13159/">
                <img src={linkedinLogo}/>
                <span>LinkedIn</span>
              </a>
              <a className={styles.contactGithub} href="https://github.com/wellingtonlira826">
                <img src={githubLogo}/>
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}