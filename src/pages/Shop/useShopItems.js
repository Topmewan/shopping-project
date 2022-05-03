import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../feature/reducers/Filter/filter.slice";
import {fetchItems} from "../../feature/reducers/Items/items.actions";

export const useShopItems = () => {
  const dispatch = useDispatch();
  const {shopItems, isLoading} = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);


  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");

  const filteredItems = shopItems.filter((item) => {
    if (!filter || filter === "all") return true;
    return item.category === filter;
  });

  const paginationItems = filteredItems.filter((item, idx) => {
    return idx + 1 <= page * 9 && idx + 1 >= page * 9 - 9;
  });

  const getFilter = (val) => {
    dispatch(setFilter(val));
    setPage(1);
  };

  const sortedItems = () => {
    if (!sortBy) {
      return paginationItems;
    }
    return [...paginationItems].sort((a, b) => {
      if (sortBy === "up") {
        return a.price - b.price;
      }
      if (sortBy === "down") {
        return b.price - a.price;
      }
    });
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch])

  return {
    filter,
    getFilter,
    filteredItems,
    sortedItems,
    page,
    setPage,
    setSortBy,
    isLoading
  };
};
