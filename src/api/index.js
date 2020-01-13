import request from '../utils/request';

export const fetchAllArticles= () => {
    return request.get('/articles');
};

export const fetchArticle = id => {
  return request.get(`/article/${id}`);
};

export const createArticle = markdown => {
  return request.post('/article', markdown);
};

export const updateArticle = (id, markdown) => {
  return request.put(`/article/${id}`, markdown);
};

export const removeArticle = (id) => {
  return request.delete(`/article/${id}`);
};