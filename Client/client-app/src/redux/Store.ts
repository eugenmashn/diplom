import { configureStore, ConfigureStoreOptions} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {apiMainQuery} from './api/createApi';
import auth from './slice/authSlice';


export const createStore = (
    options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
    configureStore({
        reducer: {
            [apiMainQuery.reducerPath]: apiMainQuery.reducer,
            auth
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiMainQuery.middleware),
        ...options
    });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
