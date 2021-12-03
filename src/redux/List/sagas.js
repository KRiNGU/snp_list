import {fork, takeEvery, call, put} from 'redux-saga/effects';
import {loadList, addContact, deleteContact, loadContact, changeContact} from './reducer';
import {addContact as addContactApi, getList as getListApi, changeContact as changeContactApi, deleteContact as deleteContactApi, getContactById as getContactByIdApi} from '../../api/List';

////////////////////////////////          CHANGE CONTACT          ///////////////////////////////


async function doChangeContact({id, name, phoneNumber, placement}) {
    await changeContactApi({id, name, phoneNumber, placement});
}

export function* changeContactSaga({id, name, phoneNumber, placement}) {
    yield call(doChangeContact, {id, name, phoneNumber, placement});

    yield put(changeContact({id, name, phoneNumber, placement}));
}

export function* workChangeContactSaga ({payload}) {
    yield fork(changeContactSaga, payload);
}

export function* watchChangeSaga () {
    yield takeEvery('CHANGE_CONTACT', workChangeContactSaga);
}

////////////////////////////////          GET LIST OF CONTACTS          ///////////////////////////////

async function doGetList () {
    const response = await getListApi();

    return response.data;
}

export function* getListSaga () {
    const list = yield call(doGetList);

    yield put(loadList(list));
}

export function* workGetListSaga () {
    yield fork(getListSaga);
}

export function* watchGetListSaga () {
    yield takeEvery('LOAD_LIST', workGetListSaga);
}

////////////////////////////////          GET CONTACT         ///////////////////////////////

export async function doGetContact ({id}) {
    const response = await getContactByIdApi({id});

    return response.data;
}

export function* getContactSaga ({id}) {
    const contact = yield call(doGetContact, {id});

    yield put(loadContact(contact));
}


export function* workGetContactSaga ({payload}) {
    yield fork(getContactSaga, payload);
}

export function* watchGetContactSaga () {
    yield takeEvery('LOAD_CONTACT', workGetContactSaga);
}

////////////////////////////////          ADD CONTACT          ///////////////////////////////

async function doAddContact ({id, name, phoneNumber, placement}) {
    await addContactApi({id, name, phoneNumber, placement});
}

export function* addContactSaga ({id, name, phoneNumber, placement}) {
    yield call(doAddContact, {id, name, phoneNumber, placement});

    yield put(addContact({id, name, phoneNumber, placement}));
}

export function* workAddContactSaga ({payload}) {
    yield fork(addContactSaga, payload);
}

export function* watchAddContactSaga () {
    yield takeEvery('ADD_CONTACT', workAddContactSaga);
}

////////////////////////////////          DELETE CONTACT          ///////////////////////////////

async function doDeleteContact({id}) {
    await deleteContactApi({id});
}

export function* deleteContactSaga ({id}) {
    yield call(doDeleteContact, {id});

    yield put(deleteContact({id}));
}

export function* workDeleteContact ({payload}) {
    yield fork(deleteContactSaga, payload);
}

export function* watchDeleteContactSaga() {
    yield takeEvery('DELETE_CONTACT', workDeleteContact)
}

////////////////////////////////          ROOT SAGA          ///////////////////////////////

export default function* rootSaga() {
    yield fork(watchChangeSaga);
    yield fork(watchGetListSaga);
    yield fork(watchAddContactSaga);
    yield fork(watchDeleteContactSaga)
    yield fork(watchGetContactSaga);
}

