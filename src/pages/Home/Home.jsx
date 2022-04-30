import React from "react";
import styles from "./Home.module.scss";
import New from "./New";
import Collection from "./Collection";
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
