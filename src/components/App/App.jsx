import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Layout, ScrollToTop } from "../index";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <ScrollToTop>
      <Layout />
    </ScrollToTop>
  );
};

export default App;
