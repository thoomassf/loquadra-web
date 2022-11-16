import styles from './Overview.module.css';

import homeImg from '../assets/Home.png';
import contatoImg from '../assets/Contato.png';
import opcoesImg from '../assets/Opcoes.png';

export function Overview() {
  return (
    <section className={styles.overviewContainer}>
      <article>
        <div className={styles.description}>
          <strong>Como funciona ?</strong>
          <p>Nossa plataforma para locação de quadras exclusivamente através de um ChatBot, onde você pode seguir os caminhos como locador e locatário. Nossa intenção é que seja intuitivo e fácil de utilizar.</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>Tela inicial do ChatBot</p>
            <img src={homeImg} alt="" />
          </div>

          <div className={styles.card}>
            <p>Informe seus dados báscios</p>
            <img src={contatoImg} alt="" />
          </div>

          <div className={styles.card}>
            <p>Escolha sua rota </p>
            <img src={opcoesImg} alt="" />
          </div>
        </div>
      </article>      
    </section>
  )
}