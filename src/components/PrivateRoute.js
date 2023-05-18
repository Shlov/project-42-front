import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// import { selectIsLoggedIn, selectIsRefreshing } from "Redux/auth/selector"


// export const PrivateRoute = ({ component: Component, redirectTo="/"}) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const showPrivate = !isLoggedIn && !isRefreshing;
//   return showPrivate ? <Navigate to={redirectTo} /> : Component;
// };