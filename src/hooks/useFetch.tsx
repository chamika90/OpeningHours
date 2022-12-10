import {useEffect, useState} from 'react';

type useFetchProps = {
  url: string;
};
const useFetch = ({url}: useFetchProps) => {
  const [isLoading, setLoadingStatus] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoadingStatus(false);
      })
      .catch(err => {
        setError(err);
        setLoadingStatus(false);
      });
  }, []);

  return {isLoading, data, error};
};

export default useFetch;
