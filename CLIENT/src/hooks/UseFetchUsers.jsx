import { useEffect, useState, useCallback } from "react";

function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [usersIsLoading, setUsersIsLoading] = useState(true);
  const [usersError, setUsersError] = useState(null);

  const fetchData = useCallback(async () => {
    setUsersIsLoading(true);
    try {
      const response = await fetch("http://localhost:9000/api/user", {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setUsers(data.response);
    } catch (error) {
      setUsersError(error.message);
    } finally {
      setUsersIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { users, usersIsLoading, usersError, refetchUsers: fetchData };
}

export default useFetchUsers;
