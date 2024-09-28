import { useState } from 'react';
import axios from 'axios';

const ProductAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    discount: '',
    description: '',
    image: null
  });

  const [deleteId, setDeleteId] = useState('');
  const [message, setMessage] = useState(''); // State for success/failure message
  const [error, setError] = useState('');     // State for error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files ? e.target.files[0] : e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('price', formData.price);
    data.append('discount', formData.discount);
    data.append('description', formData.description);
    data.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:5000/add-product', data);
      setMessage('Product added successfully');
      setError('');
      // Reset form fields after success
      setFormData({
        title: '',
        price: '',
        discount: '',
        description: '',
        image: null
      });
    } catch (error) {
      setError('Error adding product. Please try again.');
      setMessage('');
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:5000/delete-product/${deleteId}`);
      setMessage('Product deleted successfully');
      setError('');
      setDeleteId(''); // Clear the input field after deletion
    } catch (error) {
      setError('Error deleting product. Please try again.');
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="discount"
          placeholder="Discount"
          value={formData.discount}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <input type="file" name="image" onChange={handleChange} required />
        <br />
        <button type="submit">Add Product</button>
      </form>

      <h2>Delete Product</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Product ID"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          required
        />
        <br />
        <button type="submit">Delete Product</button>
      </form>

      {/* Display success or error message */}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProductAdd;
