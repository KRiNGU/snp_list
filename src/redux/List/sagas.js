import {fork, takeEvery, call, put} from 'redux-saga/effects';
import {changeName, changePhoneNumber, changePlacement, loadList, addContact, deleteContact, loadContact} from './reducer';
import {addContact as addContactApi, getList as getListApi, changeContact as changeContactApi, deleteContact as deleteContactApi, getContactById as getContactByIdApi} from '../../api/List';

////////////////////////////////          CHANGE SOME PARAMETER          ///////////////////////////////

// NAME

async function doChangeName({id, name, phoneNumber, placement}) {
    await changeContactApi({id, name, phoneNumber, placement});
}

export function* changeNameSaga({id, name, phoneNumber, placement}) {
    yield call(doChangeName, {id, name, phoneNumber, placement});

    yield put(changeName({id, value: name}));
}

export function* workChangeNameSaga ({payload}) {
    yield fork(changeNameSaga, payload);
}

// PHONE

async function doChangePhone({id, name, phoneNumber, placement}) {
    await changeContactApi({id, name, phoneNumber, placement});
}

export function* changePhoneSaga({id, name, phoneNumber, placement}) {
    yield call(doChangePhone, {id, name, phoneNumber, placement});

    yield put(changePhoneNumber({id, value: phoneNumber}));
}

export function* workChangePhoneSaga ({payload}) {
    yield fork(changePhoneSaga, payload);
}

// PLACEMENT

async function doChangePlacement({id, name, phoneNumber, placement}) {
    await changeContactApi({id, name, phoneNumber, placement});
}

export function* changePlacementSaga({id, name, phoneNumber, placement}) {
    yield call(doChangePlacement, {id, name, phoneNumber, placement});

    yield put(changePlacement({id, value: placement}));
}

export function* workChangePlacementSaga ({payload}) {
    yield fork(changePlacementSaga, payload);
}

export function* watchChangeSaga () {
    yield takeEvery('CHANGE_NAME', workChangeNameSaga);
    yield takeEvery('CHANGE_PHONE', workChangePhoneSaga);
    yield takeEvery('CHANGE_PLACEMENT', workChangePlacementSaga);
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

async function doGetContact ({id}) {
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

async function doAddContact (id) {
    await addContactApi(id);
}

export function* addContactSaga ({id}) {
    yield call(doAddContact, {id: id});

    yield put(addContact({id: id}));
}

export function* workAddContactSaga ({payload}) {
    yield fork(addContactSaga, payload);
}

export function* watchAddContactSaga () {
    yield takeEvery('ADD_ELEMENT', workAddContactSaga);
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

