import React, {useEffect, useState} from 'react';
import axios from "axios";

export const useFetch = (url) => {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [isError,setIsError] = useState(null);

  const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const {data} = await axios.get(url);
        setData(data);
        return data;

      }catch (e) {
        console.log(e.message)
        setIsError(e.message)

      }finally {
        setIsLoading(false)
      }
  }

  useEffect(() => {
    fetchData(url)
  },[])

  return {
    data,
    isLoading,
    isError
  }
};

