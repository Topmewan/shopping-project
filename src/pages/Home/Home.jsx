import React from "react";
import styles from "./Home.module.scss";
import New from "./New";
import Collection from "./Collection";
import Important from "./Important";
import Team from "./Team";
import { useCollection } from "./useCollection";

const Home = () => {
  const { newCollectionItems, isLoading, isError } = useCollection();

  return (
    <main className={styles.wrapper}>
      <New />
      <Collection
        newCollectionItems={newCollectionItems}
        isLoading={isLoading}
        isError={isError}
      />
      <Important />
      <Team />
    </main>
  );
};

export default Home;
