// import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<SharedLayout/>}>
    //     <Route index element={<MainPage />}/>
    //     <Route path="/user" element={
    //       <PrivateRoute redirectTo="/login" component={<UserPage/>}/>
    //     }/>
    //     <Route path="/login" element={
    //       <RestrictedRoute redirectTo="/user" component={<LoginPage/>}/>
    //     }/>
    // </Routes>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      Your pet....
    </div>
  );
};
