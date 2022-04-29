import React from 'react';
import Title from "../../../components/Title";
import IButton from "../../../components/ui-kit/IButton";
import ph from './../../../assets/adam-winger-fI-TKWjKYls-unsplash 1.png';

import styles from './Team.module.scss';
import {Link} from "react-router-dom";


const Team = () => {
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <Title>
          Команда Мечты
        </Title>
        <div className={styles.feature}>
          <div className={styles.left}>
            <img src={ph} alt=""/>
          </div>
          <div className={styles.right}>
            <h3>Для каждой</h3>
            <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
            </p>
            <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой
              девушки.</p>
            <Link to={'/about'}><IButton variant='more'>Подробнее о бренде</IButton></Link>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Team;