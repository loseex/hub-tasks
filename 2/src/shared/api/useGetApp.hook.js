import { useEffect, useState } from "react";

export const useGetApp = (uuid) => {
  const [data, setData] = useState({});
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetch("http://localhost:8080/app/" + uuid, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Error fetch");
        }

        const data = await response.json();

        setData(data.application);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };

    fetchRequest();
  }, []);

  return { data, IsLoading };
};
