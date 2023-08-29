import {configureStore} from '@reduxjs/toolkit';
import taskSlice from './features/tasks/taskSlice';
import userSlice from './features/user/userSlice';


const store = configureStore({
    reducer: {
        tasks: taskSlice,
        userSlice: userSlice,
    },
});

export default store;