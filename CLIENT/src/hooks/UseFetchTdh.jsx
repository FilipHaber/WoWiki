import { useEffect, useState } from "react";

function useFetchTdh() {
  const [tdh, setTdh] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:9000/api/tdh", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTdh(data.response);
      } catch (error) {
        setError(error.message);
        console.log("Error fetching tdh:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { tdh, isLoading, error };
}

export default useFetchTdh;
