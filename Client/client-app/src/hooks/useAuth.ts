import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {selectCurrentUser} from '../redux/slice/authSlice';



export const useAuth = () => {
    const user = useSelector(selectCurrentUser)

    return useMemo(() => ({ user }), [user])
}

export const useIsAutorized = () => {
    const user = useSelector(selectCurrentUser)

    return useMemo(() => !!user, [user])
}
