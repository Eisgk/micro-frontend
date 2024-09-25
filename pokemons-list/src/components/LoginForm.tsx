import React from 'react';

const LoginForm: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     // Handle login logic here (e.g., API call)
//     console.log('Logging in with:', { email, password });

//     // Reset form
//     setEmail('');
//     setPassword('');
//     setError('');
//   };

  return (
    // <form onSubmit={handleSubmit}>
    //   <h2>Login</h2>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       id="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="password"
    //       id="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <button type="submit">Login</button>
    // </form>
    <h2>Login</h2>
  );
};

export default LoginForm;
