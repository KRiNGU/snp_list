import axios from 'axios';

const defaultHeaders = {};

const defaultBodyHeaders = {
  ...defaultHeaders,
  "Content-Type": "application/json",
};

const mainAxios = axios.create({
    baseURL: 'http://localhost:3001',
    headers: defaultBodyHeaders,
});

export const getList = () => 
    mainAxios.get(`/items/`);

export const getContactById = ({id}) =>
    mainAxios.get(`/items/${id}`);

export const addContact = ({id}) =>
    mainAxios.post(`/items/`, {
        id: id,
        name: '',
        phoneNumber: '',
        placement: '',
    });

export const changeContact = ({id, name, phoneNumber, placement}) =>
    mainAxios.put(`/items/${id}`, {
        id,
        name,
        phoneNumber,
        placement,
    });

export const deleteContact = ({id}) => 
    mainAxios.delete(`/items/${id}`);