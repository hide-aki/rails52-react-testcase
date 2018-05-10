import axios from 'axios';

// Categories
const get_categories = () => axios.get('/api/categories.json');
const get_category = (id) => axios.get(`/api/categories/${id}.json`);
const delete_category = (id) => axios.delete(`/api/categories/${id}.json`);
const create_category = (payload) => axios.post('/api/categories.json', payload);
const update_category = (id, data) => axios.put(`/api/categories/${id}.json`, data);
// Posts
const get_posts = () => axios.get('/api/posts.json');
const get_post = (id) => axios.get(`/api/posts/${id}.json`);
const delete_post = (id) => axios.delete(`/api/posts/${id}.json`);
const create_post = (payload) => axios.post('/api/posts.json', payload);
const update_post = (id, data) => axios.put(`/api/posts/${id}.json`, data);
// Comments
const get_comments = () => axios.get('/api/comments.json');
const delete_comment = (id) => axios.delete(`/api/comments/${id}.json`);

const API = {
  get_categories,
  get_category,
  delete_category,
  delete_comment,
  delete_post,
  create_category,
  create_post,
  get_posts,
  get_post,
  get_comments,
  update_category,
  update_post
};
export default API;