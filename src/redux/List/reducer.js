import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const listAdatpter = createEntityAdapter({
    selectId: (e) => e.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        changeName: (state, {payload}) => {
            state.items.find(item => item.id === payload.id).name = payload.value;
        },
        changePhoneNumber: (state, {payload}) => {
            state.items.find(item => item.id === payload.id).phoneNumber = payload.value;
        },
        changePlacement: (state, {payload}) => {
            state.items.find(item => item.id === payload.id).placement = payload.value;
        },
        addContact: (state, {payload: {id}}) => {
            state.items.push({id, name: '', phoneNumber: '', placement: ''});
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

export const {changeName, changePhoneNumber, changePlacement, addContact, deleteContact, loadList, loadContact} = listSlice.actions;

export default listSlice.reducer;