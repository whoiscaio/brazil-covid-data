import axios from 'axios';
import { useEffect, useState } from 'react';

function useAxios(url: string) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const req = await axios.get(url);

      setLoading(false);
      setData(req.data);
    })();
  }, []);

  return [data, loading];
}

export default useAxios;
