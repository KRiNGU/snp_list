import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
};

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        changeName: (state, {payload}) => {
            state.items.filter(item => item.id === payload.id)[0].name = payload.value;
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        changePhoneNumber: (state, {payload}) => {
            state.items.filter(item => item.id === payload.id)[0].phoneNumber = payload.value;
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        changePlacement: (state, {payload}) => {
            state.items.filter(item => item.id === payload.id)[0].placement = payload.value;
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        addElement: (state, {payload: {newId}}) => {
            state.items.push({id: newId, name: '', phoneNumber: '', placement: ''});
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        deleteElement: (state, {payload: {id}}) => {
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('items', JSON.stringify(state.items));
        },
    },
});

export const {changeName, changePhoneNumber, changePlacement, addElement, deleteElement} = listSlice.actions;

export default listSlice.reducer;