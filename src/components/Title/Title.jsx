import React from 'react';
import styles from './Title.module.scss';

const Title = ({children, variant}) => {

  return <h1 className={`${styles.title} ${variant === 'large' && styles.lg}`}>{children}</h1>
};

export default Title;