import { useState, useEffect } from "react";

const useFetch = (url, fetchData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const request = async () => {
      const res = await fetch(url, fetchData);
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Something was wrong");
      } else {
        return setData(data);
      }
    };
    try {
      if (url) {
        request();
      }
    } catch (error) {
      return error;
    }
  }, [url]);
  return { data };
};
export default useFetch;
