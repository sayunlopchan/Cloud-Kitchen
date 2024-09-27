import axios from 'axios';

export const getProducts = () => axios.get('/api/products');
export const getProductById = (id) => axios.get(`/api/products/${id}`);
export const createProduct = (productData) => axios.post('/api/products', productData);
export const updateProduct = (id, productData) => axios.put(`/api/products/${id}`, productData);
export const deleteProduct = (id) => axios.delete(`/api/products/${id}`);
