import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        changeContact: (state, {payload: {id, name, phoneNumber, placement}}) => {
            const item = state.items.find((item) => item.id === id);
            item.name = name;
            item.phoneNumber = phoneNumber;
            item.placement = placement;
        },
        addContact: (state, {payload: {id, name, phoneNumber, placement}}) => {
            state.items.push({id, name, phoneNumber, placement});
        },
        deleteContact: (state, {payload: {id}}) => {
            state.items = state.items.filter(item => item.id !== id);
        },
        loadList: (state, {payload}) => {
            state.items = payload;
        },
        loadContact: (state, {payload: {id, name, phoneNumber, placement}}) => {
            if (!state.items.find((item) => item.id === id)) {
                state.items.push({id, name, phoneNumber, placement});
            }
        }
    },
});

export const {changeContact, addContact, deleteContact, loadList, loadContact} = listSlice.actions;

export default listSlice.reducer;