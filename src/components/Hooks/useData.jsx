import { useEffect, useState } from "react";

const useData = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-dm-abdullah.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);
  return [classes, loading];
  
};

export default useData;
