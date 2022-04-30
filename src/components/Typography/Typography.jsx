import React from 'react';
import styles from './Typography.module.scss';

const Typography= ({children, variant}) => {

  if (variant === 'title') {
    return <h1 className={`${styles.typo} ${styles.title}`}>{children}</h1>
  }
  if (variant === 'subtitle') {
    return <h2 className={`${styles.typo} ${styles.subtitle}`}>{children}</h2>
  }

  return <h3 className={`${styles.typo}`}>{children}</h3>

};

export default Typography;