import styles from './About.module.css';

export function About() {
  return (
    <section className={styles.aboutContainer}>
      <article className={styles.about}>
        <strong>Sobre a empresa</strong>
        <p>A LoQuadra foi fundada em 2021 com o objetivo de trazer praticidade e segurança na locação de quadras tanto para o locador quanto para o locatário e tudo isso na palma de sua mão.</p>
      </article>
      <div className={styles.groupItems}>
        <article className={styles.item}>
          <strong>Produto</strong>
          <p>Locação de quadras esportivas através de um chatbot.</p>
        </article>

        <article className={styles.item}>
          <strong>Missão</strong>
          <p>O LoQuadra deseja tornar a locação de quadras online, seguro e acessível.</p>
        </article>

        <article className={styles.item}>
          <strong>Visão</strong>
          <p>Tornar-se a maior plataforma de locação de quadras do Brasil em 5 anos.</p>
        </article>

        <article className={styles.item}>
          <strong>Valores</strong>
          <p>Satisfação do cliente,<br/>praticidade e colaboração.</p>
        </article>
      </div>
    </section>
  )
}