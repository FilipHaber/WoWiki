import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useFetchPersonById() {
  const { id } = useParams();
  const [person, setPerson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      try {
        const response = await fetch(`http://localhost:9000/api/person/${id}`, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPerson(data.response);
      } catch (error) {
        setError(error.message);
        console.log("Error fetching person:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { person, isLoading, error };
}

export default useFetchPersonById;
