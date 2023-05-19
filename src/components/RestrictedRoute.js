// import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

// import { selectIsLoggedIn } from "Redux/auth/selector"


// export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo}/> : Component;
// };

export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
  return true ? <Navigate to={redirectTo}/> : Component;
};