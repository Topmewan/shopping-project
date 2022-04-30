import { ShopContext } from "../context/ShopContext";
import { useFetch } from "../hooks/useFetch";

const ShopProvider = ({ children }) => {
  const { data, isLoading, isError } = useFetch(
    "http://localhost:5000/shopItems"
  );

  const threeItems = data.slice(0, 3);

  const val = {
    data,
    threeItems,
    isLoading,
    isError,
  };

  return <ShopContext.Provider value={val}>{children}</ShopContext.Provider>;
};

export default ShopProvider;
