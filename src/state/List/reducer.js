import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
};

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

    }
});

export const {} = listSlice.actions;

export default listSlice.reducer;