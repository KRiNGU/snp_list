import {takeEvery, call, put} from 'redux-saga/effects';
import * as reducers from './reducer';
import {addContact as addContactApi, getList as getListApi, changeContact as changeContactApi, deleteContact as deleteContactApi, getContactById as getContactByIdApi} from '../../api/List';

////////////////////////////////          CHANGE CONTACT          ///////////////////////////////

export function* workChangeContactSaga ({payload: {id, name, phoneNumber, placement}}) {
    try {
        yield call(changeContactApi, {id, name, phoneNumber, placement})
        yield put(reducers.changeContact({id, name, phoneNumber, placement}))
    } catch (err) {}
}

////////////////////////////////          GET LIST OF CONTACTS          ///////////////////////////////

export function* workGetListSaga () {
    try {
        const response = yield call(getListApi);
        yield put(reducers.loadList(response.data));
    } catch (err) {}
}

////////////////////////////////          GET CONTACT         ///////////////////////////////

export function* workGetContactSaga ({payload}) {
    try {
        const response = yield call(getContactByIdApi, {id: payload.id});
        yield put(reducers.loadContactSuccess(response.data));
    } catch (err) {
        yield put(reducers.loadContactFailure())
    }
}

////////////////////////////////          ADD CONTACT          ///////////////////////////////

export function* workAddContactSaga ({payload: {id, name, phoneNumber, placement}}) {
    try {
        yield call(addContactApi, {id, name, phoneNumber, placement});
        yield put(reducers.addContact({id, name, phoneNumber, placement}));
    } catch (err) {}
}

////////////////////////////////          DELETE CONTACT          ///////////////////////////////

export function* workDeleteContact ({payload: {id}}) {
    try {
        yield call(deleteContactApi, {id});
        yield put(reducers.deleteContact({id}))
    } catch (err) {}
}

////////////////////////////////          ROOT SAGA          ///////////////////////////////

export default function* rootSaga() {
    yield takeEvery('CHANGE_CONTACT', workChangeContactSaga);
    yield takeEvery('LOAD_LIST', workGetListSaga);
    yield takeEvery('ADD_CONTACT', workAddContactSaga);
    yield takeEvery('DELETE_CONTACT', workDeleteContact)
    yield takeEvery('LOAD_CONTACT', workGetContactSaga);
}
