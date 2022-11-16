import './styles/global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Overview } from './components/Overview';
import { About } from './components/About';
import { Authors } from './components/Authors';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Overview />
        <About />
        <Authors />
      </div>

      <Footer />
    </div>
  )
}
