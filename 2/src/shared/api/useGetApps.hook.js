import { useEffect, useState } from "react";

export const useGetApps = () => {
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetch("http://localhost:8080/apps", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Error fetch");
        }

        const data = await response.json();

        setData(data.applications);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };

    fetchRequest();
  }, []);

  return { data, IsLoading };
};
