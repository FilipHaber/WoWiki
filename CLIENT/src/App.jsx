import { useCheckAuth } from "./hooks/UseCheckAuth";

import UserRouter from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";
import GuestRouter from "./router/GuestRouter";
import BannedRouter from "./router/BannedRouter";

function App() {
  const [user, isLoading] = useCheckAuth();
  console.log(user);

  if (isLoading) {
    console.log("Loading");
    return <p>Loading</p>;
  }

  if (user.status === 1) {
    return <BannedRouter />;
  }

  if (user.isAdmin === 2) {
    return <AdminRouter />;
  }

  if (user.isLogged && user.status === 0) {
    return <UserRouter />;
  } else return <GuestRouter />;
}

export default App;
