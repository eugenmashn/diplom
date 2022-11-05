import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from '../Store';


const slice = createSlice({
    name: "auth",
    initialState: { user: null, token: null, refreshToken: null } as {
        user: null | any;
        token: null | string;
        refreshToken: null | string;
    },
    reducers: {
        setCredentials: (
            state,
            { payload: { user, token, refreshToken } }: PayloadAction<{ user: any; token: string, refreshToken: string }>
        ) => {
            state.user = user;
            state.token = token;
            state.refreshToken = refreshToken
        }
    },
    extraReducers: () => {}
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
