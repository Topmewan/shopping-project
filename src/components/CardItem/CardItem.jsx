import React from "react";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
  const { title, price, image } = item;
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={image} alt={title} />
        <div className={styles.overlay}>
          <a>
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H31M31 12L20.186 1M31 12L20.186 23"
                stroke="white"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <p>{title}</p>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default CardItem;
