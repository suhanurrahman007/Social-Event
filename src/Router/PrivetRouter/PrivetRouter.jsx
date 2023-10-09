import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return (
          <div className="text-center">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        );
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivetRouter;
PrivetRouter.propTypes = {
  children: PropTypes.object,
};