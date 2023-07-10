

export const ProtectedRoutes = ({children,isAllowed}) => {

    if(!isAllowed){
        return <Navigate to="/"/>
    }

  return children ? children:<Outlet/>
}
