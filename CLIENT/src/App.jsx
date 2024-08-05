import { useCheckAuth } from "./hooks/UseCheckAuth";

import UserRouter from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";

function App() {
  const [user, isLoading] = useCheckAuth();

  if (isLoading) {
    console.log("Loading");
    return <p>Loading</p>;
  }

  if (user.isAdmin) {
    return <AdminRouter />;
  } else return <UserRouter />;
}

export default App;
