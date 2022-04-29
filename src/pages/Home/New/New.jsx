import IButton from "../../../components/ui-kit/IButton";
import styles from './New.module.scss';
import arrow from '../../../assets/arrow.svg';
import {Link} from "react-router-dom";


const New = () => {

  const scrollDown = () => {
    window.scrollTo({
      top: 700,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <section className={styles.new}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.action}>
              <h1>Новые поступления
                в этом сезоне</h1>
              <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время
                исследовать.</p>
              <div>
                <div className={styles.buttons}>
                  <button className={styles.arrow} onClick={scrollDown}>
                    <img src={arrow} alt="go-down"/>
                  </button>
                  <Link to={'/shop'}><IButton>Открыть магазин</IButton></Link>
                </div>

              </div>

            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.photo}>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default New;