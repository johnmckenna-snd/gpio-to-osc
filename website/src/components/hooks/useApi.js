import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function useApi ({ url, method = 'get', body }) {
  const cache = useRef({});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // wipe out the cache
  // clear the data
  // and load us up
  function reload () {
    cache.current = {};
    setData(null);
    setLoading(true);
  }

  useEffect(() => {
    if (!url) return;

    async function callApi () {
      try {
        setLoading(true);

        if (cache.current[url]) {
          const cacheData = cache.current[url];
          setData(cacheData);
          setLoading(false);
        } else if (!cache.current.loadingFromServer) {
          // this prevents the async function being called
          // over and over while the promise is pending
          cache.current.loadingFromServer = true;
          const config = {
            method,
            data: body,
          };
          const result = await axios(url, config);
          cache.current[url] = result.data;

          setData(result.data);
          setLoading(false);
        } else {
          // if we don't have cache or we are loading
          // we don't want it... return
          return;
        }
      } catch (e) {
        console.error(e);
      }
    }

    callApi();
  }, [body, method, url, loading]);

  // exported as an array for dynamic naming
  // when calling the hook
  return [data, loading, reload];
}

export default useApi;
