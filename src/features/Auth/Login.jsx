import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState(''); // Initial value is empty
  const [password, setPassword] = useState(''); // Initial value is empty
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    // Here you can implement your login logic
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear fields after submission
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <label htmlFor="email" className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={email} // Controlled input with no pre-written value
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            placeholder="Enter your email"
            required
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
        </label>

        <label htmlFor="password" className="block mb-2">
          Password:
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle between text and password
              name="password"
              id="password"
              value={password} // Controlled input with no pre-written value
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              placeholder="Enter your password"
              required
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </label>

        <button
          type="submit"
          className="w-full bg-red-500 text-white font-semibold p-2 rounded-lg hover:bg-red-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
