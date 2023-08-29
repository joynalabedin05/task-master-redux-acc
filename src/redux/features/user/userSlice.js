import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'mir hussain',
    email: 'abc@gmail.com',
    userTasks: [],
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{},
});

export default userSlice.reducer;