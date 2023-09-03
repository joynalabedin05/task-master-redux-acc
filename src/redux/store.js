import {configureStore} from '@reduxjs/toolkit';
// import taskSlice from './features/tasks/taskSlice';
// import userSlice from './features/user/userSlice';
import baseApi from './features/api/baseApi';


const store = configureStore({
    reducer: {
        // taskSlice: taskSlice,
        // userSlice: userSlice,
        // rtk QueryStatus....................

        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;