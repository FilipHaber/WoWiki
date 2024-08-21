import { useEffect, useState } from "react";
import { useUser } from "./UseUser";

function useCheckAuth() {
  const { user, login } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAuthentication() {
      try {
        const response = await fetch("http://localhost:9000/api/auth", {
          credentials: "include",
        });
        if (response.status === 401) {
          return;
        }
        if (response.ok) {
          const data = await response.json();
          login(data.user);
        } else {
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    fetchAuthentication();
  }, []);
  return [user, isLoading];
}

export { useCheckAuth };
