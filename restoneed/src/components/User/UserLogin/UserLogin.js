import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../services/api';
import './UserLogin.css';

const UserLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);

      const res = await api.post('/auth/login', {
        email: formData.email,
        password: formData.password
      });

      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form id="loginform" onSubmit={handleSubmit}>
        <h1>Login to RestoNeed</h1>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="userdata">
          <p>
            <span>New user? </span>
            <Link to="/signup">Sign-up now</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
