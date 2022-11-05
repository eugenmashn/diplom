import {apiMainQuery} from './createApi';
import {LoginRequest, UserResponse} from '../../models/auth';

export const authApiQuery = apiMainQuery.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'Authenticate/login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
    overrideExisting: false,
});
