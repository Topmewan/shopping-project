import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../feature/reducers/Items/items.actions";

export const useCollection = () => {
  const dispatch = useDispatch();
  const { shopItems, isLoading, isError } = useSelector((state) => state.items);

  const newCollectionItems = shopItems.slice(0, 3);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return {
    newCollectionItems,
    isLoading,
    isError,
  };
};
