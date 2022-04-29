import React from "react";
import styles from "./Home.module.scss";
import Collection from "./Collection";
import New from "./New/New";
import Important from "./Important";
import Team from "./Team";


const Home = () => {
  return (
    <main className={styles.wrapper}>
      <New/>
      <Collection/>
      <Important/>
      <Team/>
    </main>

  );
};

export default Home;
