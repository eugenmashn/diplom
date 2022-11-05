import {User} from '../../models/auth';
import {redirect} from 'react-router-dom';

export function CheckAuth(user: User){
    if(!user)
        return redirect("/login");
    return;
}
