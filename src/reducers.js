
import { combineReducers } from 'redux';
import { ALL_ARTICLES_RECEIVED, SELECTED_ARTICLE_RECEIVED } from './actions';

const initialArticle = {
    all: [],
    selected: null,
};

const articleReucer = (state = initialArticle, action) => {
    switch (action.type) {
        case ALL_ARTICLES_RECEIVED:
        case SELECTED_ARTICLE_RECEIVED:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

// Combine Reducer
const Reducer = combineReducers({
    article: articleReucer,
})

export default Reducer;