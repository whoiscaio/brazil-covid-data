import axios from 'axios';
import { useEffect, useState } from 'react';
import StateInterface from '../interfaces/StateInterface';

function useAxios(url: string): [any, boolean] {
  const [data, setData] = useState<{ data: StateInterface[] }>();
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
