import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchItem} from "../../feature/reducers/Items/items.actions";

export const useMain = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {item,isLoading,isError} = useSelector(state => state.items);

  useEffect(() => {
    if(!id) return;
    dispatch(fetchItem(id))
  },[dispatch,id]);

  return {
    item,
    isLoading,
    isError
  }

}