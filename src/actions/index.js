export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const getAllArticles = () => ({ type: GET_ALL_ARTICLES, payload: {} });


export const ALL_ARTICLES_RECEIVED = 'ALL_ARTICLES_RECEIVED';
export const articlesReceived = all => ({
    type: ALL_ARTICLES_RECEIVED,
    payload: { all },
});

export const GET_ARTICLE = 'GET_ARTICLE';
export const getArticle = (id) => ({
    type: GET_ARTICLE,
    payload: { id },
});

export const SELECTED_ARTICLE_RECEIVED = 'SELECTED_ARTICLE_RECEIVED';
export const selectedArticleReceived = article => ({
    type: SELECTED_ARTICLE_RECEIVED,
    payload: { selected: article },
});

export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const editArticle = (id, markdown) => ({
    type: EDIT_ARTICLE,
    payload: { id, markdown },
});

export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const createArticle = markdown => ({
    type: CREATE_ARTICLE,
    payload: { markdown },
});

export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
export const removeArticle = (id, refresh = false) => ({
    type: REMOVE_ARTICLE,
    payload: { id, refresh },
});