import { useEffect, useState, useCallback } from "react";

function useFetchAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alertsError, setAlertsError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:9000/api/alert/", {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAlerts(data.response);
    } catch (error) {
      setAlertsError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { alerts, isLoading, alertsError, refetch: fetchData };
}

export default useFetchAlerts;
