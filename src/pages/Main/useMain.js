import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchItem,
  fetchItems,
} from "../../feature/reducers/Items/items.actions";

export const useMain = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { item, shopItems, isLoading, isError } = useSelector(
    (state) => state.items
  );

  const similarItems = shopItems
    .filter(
      (shopItem) =>
        shopItem.category === item.category && shopItem.id !== item.id
    )
    .slice(0, 2);

  useEffect(() => {
    if (!id) return;
    dispatch(fetchItem(id));
  }, [dispatch, id]);

  return {
    item,
    isLoading,
    isError,
    similarItems,
  };
};
