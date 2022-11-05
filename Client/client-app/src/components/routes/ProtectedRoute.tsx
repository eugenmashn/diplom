import { Navigate } from "react-router-dom";
import {useAuth} from '../../hooks/useAuth';
export const  ProtectedRoute = (props: { children: JSX.Element }) => {
        let {children} = props;
        const {user} = useAuth();
        if (!user) {
            // user is not authenticated
            return <Navigate to='/login'/>;
        }
        return children;
}
