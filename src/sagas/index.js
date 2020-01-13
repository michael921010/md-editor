import { put, call, takeLatest, all } from 'redux-saga/effects';
import history from '../history';
import * as Api from '../api';
import * as actions from '../actions';

function* getAllArticles(action) {
    const res = yield call(Api.fetchAllArticles);
    yield put(actions.articlesReceived(res.data.data));
}

function* getArticle(action) {
    const res = yield call(Api.fetchArticle, action.payload.id);
    yield put(actions.selectedArticleReceived(res.data.data));
}

function* createArticle(action) {
    console.log(action.payload.markdown)
    yield call(Api.createArticle, action.payload.markdown);
    history.replace('/');
}

function* editArticle(action) {
    yield call(Api.updateArticle, action.payload.id, action.payload.markdown);
    history.replace(`/article/${action.payload.id}`);
}

function* removeArticle(action) {
    yield call(Api.removeArticle, action.payload.id);
    if (action.payload.refresh) {
        const res = yield call(Api.fetchAllArticles);
        yield put(actions.articlesReceived(res.data.data));
    } else {
        history.replace(`/`);
    }
}

function* actionWatcher() {
    yield takeLatest(actions.GET_ALL_ARTICLES, getAllArticles);
    yield takeLatest(actions.GET_ARTICLE, getArticle);
    yield takeLatest(actions.CREATE_ARTICLE, createArticle);
    yield takeLatest(actions.EDIT_ARTICLE, editArticle);
    yield takeLatest(actions.REMOVE_ARTICLE, removeArticle);    
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
