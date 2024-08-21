import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/UseUser";

function ProtectedAdminRoute({ component: Component }) {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAdmin) {
      navigate("/");
    }
  }, [user]);

  if (user.isAdmin) {
    return <Component />;
  }
}

ProtectedAdminRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedAdminRoute;
