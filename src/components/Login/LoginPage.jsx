// // // // // import React, { useState } from 'react';
// // // // // import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// // // // // import './LoginPage.css'; // Optional: Import CSS for styling
// // // // // import axios from '../axios'; // Import your configured axios instance

// // // // // const handleLogin = async (e) => {
// // // // //   e.preventDefault();
// // // // //   try {
// // // // //     const response = await axios.post('/auth/login', { email, password });
// // // // //     localStorage.setItem('token', response.data.token);
// // // // //     window.location.href = '/'; // Redirect on success
// // // // //   } catch (error) {
// // // // //     console.error('Login failed:', error.response?.data?.message || error.message);
// // // // //     alert('Login failed');
// // // // //   }
// // // // // };

// // // // // const LoginPage = () => {
// // // // //     const [email, setEmail] = useState('');
// // // // //     const [password, setPassword] = useState('');

// // // // //     const handleLogin = (e) => {
// // // // //         e.preventDefault();
// // // // //         // Add logic to handle login, such as API calls
// // // // //         console.log('Email:', email);
// // // // //         console.log('Password:', password);
// // // // //     };

// // // // //     return (
// // // // //         <div className="login-container">
// // // // //             <h2>Login</h2>
// // // // //             <form onSubmit={handleLogin} className="login-form">
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="email">Email:</label>
// // // // //                     <input 
// // // // //                         id="email"
// // // // //                         type="email" 
// // // // //                         value={email} 
// // // // //                         onChange={(e) => setEmail(e.target.value)} 
// // // // //                         required 
// // // // //                         placeholder="Enter your email"
// // // // //                     />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="password">Password:</label>
// // // // //                     <input 
// // // // //                         id="password"
// // // // //                         type="password" 
// // // // //                         value={password} 
// // // // //                         onChange={(e) => setPassword(e.target.value)} 
// // // // //                         required 
// // // // //                         placeholder="Enter your password"
// // // // //                     />
// // // // //                 </div>
// // // // //                 <button type="submit" className="login-button">Login</button>
// // // // //             </form>
// // // // //             <div className="signup-link">
// // // // //                 <p>Dont  have an account?</p>
// // // // //                 <Link to="/signup">
// // // // //                     <button className="signup-button">Sign Up</button>
// // // // //                 </Link>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default LoginPage;
// // // // import React, { useState } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import './LoginPage.css';
// // // // import axios from '../axios'; // Import your configured axios instance

// // // // const LoginPage = () => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const response = await axios.post('/auth/login', { email, password });
// // // //       localStorage.setItem('token', response.data.token);
// // // //       window.location.href = '../MainPage/'; // Redirect on success
// // // //     } catch (error) {
// // // //       console.error('Login failed:', error.response?.data?.message || error.message);
// // // //       alert('Login failed');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="login-container">
// // // //       <h2>Login</h2>
// // // //       <form onSubmit={handleLogin} className="login-form">
// // // //         <div className="form-group">
// // // //           <label htmlFor="email">Email:</label>
// // // //           <input 
// // // //             id="email"
// // // //             type="email" 
// // // //             value={email} 
// // // //             onChange={(e) => setEmail(e.target.value)} 
// // // //             required 
// // // //             placeholder="Enter your email"
// // // //           />
// // // //         </div>
// // // //         <div className="form-group">
// // // //           <label htmlFor="password">Password:</label>
// // // //           <input 
// // // //             id="password"
// // // //             type="password" 
// // // //             value={password} 
// // // //             onChange={(e) => setPassword(e.target.value)} 
// // // //             required 
// // // //             placeholder="Enter your password"
// // // //           />
// // // //         </div>
// // // //         <button type="submit" className="login-button">Login</button>
// // // //       </form>
// // // //       <div className="signup-link">
// // // //         <p>Dont have an account?</p>
// // // //         <Link to="/signup">
// // // //           <button className="signup-button">Sign Up</button>
// // // //         </Link>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LoginPage;
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import './LoginPage.css';
// // // import axios from '../axios'; // Import your configured axios instance

// // // const LoginPage = () => {
// // //   const [email, setEmail] = React.useState('');
// // //   const [password, setPassword] = React.useState('');

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axios.post('/auth/login', { email, password });
// // //       localStorage.setItem('token', response.data.token);
// // //       window.location.href = '../MainPage/'; // Redirect on success
// // //     } catch (error) {
// // //       console.error('Login failed:', error.response?.data?.message || error.message);
// // //       alert('Login failed');
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-layout">
// // //       <div className="image-section">
// // //         {/* Image can be set as background image */}
// // //       </div>
// // //       <div className="content-section">
// // //         <button className="login-button">Login</button>
// // //         <div className="login-container">
// // //           <h2>Login</h2>
// // //           <form onSubmit={handleLogin} className="login-form">
// // //             <div className="form-group">
// // //               <label htmlFor="email">Email:</label>
// // //               <input 
// // //                 id="email"
// // //                 type="email" 
// // //                 value={email} 
// // //                 onChange={(e) => setEmail(e.target.value)} 
// // //                 required 
// // //                 placeholder="Enter your email"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="password">Password:</label>
// // //               <input 
// // //                 id="password"
// // //                 type="password" 
// // //                 value={password} 
// // //                 onChange={(e) => setPassword(e.target.value)} 
// // //                 required 
// // //                 placeholder="Enter your password"
// // //               />
// // //             </div>
// // //             <button type="submit" className="login-button">Login</button>
// // //           </form>
// // //           <div className="signup-link">
// // //             <p>Don't have an account?</p>
// // //             <Link to="/signup">
// // //               <button className="signup-button">Sign Up</button>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginPage;
// // // import React from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import './LoginPage.css';
// // // import axios from '../axios'; // Import your configured axios instance

// // // const LoginPage = () => {
// // //   const [email, setEmail] = React.useState('');
// // //   const [password, setPassword] = React.useState('');
// // //   const navigate = useNavigate(); // Initialize useNavigate

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axios.post('/auth/login', { email, password });
// // //       localStorage.setItem('token', response.data.token);
// // //       navigate('/main'); // Redirect to MainPage on success
// // //     } catch (error) {
// // //       console.error('Login failed:', error.response?.data?.message || error.message);
// // //       alert('Login failed');
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-layout">
// // //       <div className="image-section">
// // //         {/* Image can be set as background image */}
// // //       </div>
// // //       <div className="content-section">
// // //         <button className="login-button">Login</button>
// // //         <div className="login-container">
// // //           <h2>Login</h2>
// // //           <form onSubmit={handleLogin} className="login-form">
// // //             <div className="form-group">
// // //               <label htmlFor="email">Email:</label>
// // //               <input 
// // //                 id="email"
// // //                 type="email" 
// // //                 value={email} 
// // //                 onChange={(e) => setEmail(e.target.value)} 
// // //                 required 
// // //                 placeholder="Enter your email"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="password">Password:</label>
// // //               <input 
// // //                 id="password"
// // //                 type="password" 
// // //                 value={password} 
// // //                 onChange={(e) => setPassword(e.target.value)} 
// // //                 required 
// // //                 placeholder="Enter your password"
// // //               />
// // //             </div>
// // //             <button type="submit" className="login-button">Login</button>
// // //           </form>
// // //           <div className="signup-link">
// // //             <p>Dont have an account?</p>
// // //             <Link to="/signup">
// // //               <button className="signup-button">Sign Up</button>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginPage;
// // // import React from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import './LoginPage.css';
// // // import axios from '../axios'; // Import your configured axios instance

// // // const LoginPage = () => {
// // //   const [email, setEmail] = React.useState('');
// // //   const [password, setPassword] = React.useState('');
// // //   const navigate = useNavigate(); // Initialize useNavigate

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axios.post('/auth/login', { email, password });
// // //       localStorage.setItem('token', response.data.token);
// // //       navigate('/main'); // Redirect to MainPage on success
// // //     } catch (error) {
// // //       console.error('Login failed:', error.response?.data?.message || error.message);
// // //       alert('Login failed');
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-layout">
// // //       <div className="image-section">
// // //         {/* Image can be set as background image */}
// // //       </div>
// // //       <div className="content-section">
// // //         <div className="login-container">
// // //           <h2>Login</h2>
// // //           <form onSubmit={handleLogin} className="login-form">
// // //             <div className="form-group">
// // //               <label htmlFor="email">Email:</label>
// // //               <input 
// // //                 id="email"
// // //                 type="email" 
// // //                 value={email} 
// // //                 onChange={(e) => setEmail(e.target.value)} 
// // //                 required 
// // //                 placeholder="Enter your email"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="password">Password:</label>
// // //               <input 
// // //                 id="password"
// // //                 type="password" 
// // //                 value={password} 
// // //                 onChange={(e) => setPassword(e.target.value)} 
// // //                 required 
// // //                 placeholder="Enter your password"
// // //               />
// // //             </div>
// // //             <button type="submit" className="login-button">Login</button>
// // //           </form>
// // //           <div className="signup-link">
// // //             <p>Dont have an account?</p>
// // //             <Link to="/signup">
// // //               <button className="signup-button">Sign Up</button>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginPage;
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './LoginPage.css';
// // import axios from '../axios'; // Import your configured axios instance

// // const LoginPage = () => {
// //   const [email, setEmail] = React.useState('');
// //   const [password, setPassword] = React.useState('');
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('/auth/login', { email, password });
// //       localStorage.setItem('token', response.data.token);
// //       navigate('/main'); // Redirect to MainPage on success
// //     } catch (error) {
// //       console.error('Login failed:', error.response?.data?.message || error.message);
// //       alert('Login failed');
// //     }
// //   };

// //   return (
// //     <div className="login-layout">
// //       <div className="image-section">
// //         {/* Image can be set as background image */}
// //       </div>
// //       <div className="content-section">
// //         <div className="login-container">
// //           <h2>Login</h2>
// //           <form onSubmit={handleLogin} className="login-form">
// //             <div className="form-group">
// //               <label htmlFor="email">Email:</label>
// //               <input 
// //                 id="email"
// //                 type="email" 
// //                 value={email} 
// //                 onChange={(e) => setEmail(e.target.value)} 
// //                 required 
// //                 placeholder="Enter your email"
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="password">Password:</label>
// //               <input 
// //                 id="password"
// //                 type="password" 
// //                 value={password} 
// //                 onChange={(e) => setPassword(e.target.value)} 
// //                 required 
// //                 placeholder="Enter your password"
// //               />
// //             </div>
// //             <button type="submit" className="login-button">Login</button>
// //           </form>
// //           <div className="signup-link">
// //             <p>Dont have an account?</p>
// //             <Link to="/signup">
// //               <button className="signup-button">Sign Up</button>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './LoginPage.css';
// // import axios from '../axios'; // Import your configured axios instance

// // const LoginPage = () => {
// //   const [email, setEmail] = React.useState('');
// //   const [password, setPassword] = React.useState('');
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('/auth/login', { email, password });
// //       localStorage.setItem('token', response.data.token);
// //       navigate('/main'); // Redirect to MainPage on success
// //     } catch (error) {
// //       console.error('Login failed:', error.response?.data?.message || error.message);
// //       alert('Login failed');
// //     }
// //   };

// //   return (
// //     <div className="login-page">
// //       <div className="login-layout">
// //         <div className="image-container">
// //           <img src="loginnns.svg" alt="Login Image" />
// //         </div>
// //         <div className="content-section">
// //           <div className="login-container">
// //             <h2>Please login to your account</h2>
// //             <form onSubmit={handleLogin} className="login-form">
// //               <div className="form-group">
// //                 <label htmlFor="email">EMAIL ADDRESS</label>
// //                 <input 
// //                   id="email"
// //                   type="email" 
// //                   value={email} 
// //                   onChange={(e) => setEmail(e.target.value)} 
// //                   required 
// //                   placeholder="Email Address"
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="password">PASSWORD</label>
// //                 <input 
// //                   id="password"
// //                   type="password" 
// //                   value={password} 
// //                   onChange={(e) => setPassword(e.target.value)} 
// //                   required 
// //                   placeholder="Password"
// //                 />
// //               </div>
// //               <div className="remember-me">
// //                 <input type="checkbox" id="remember" />
// //                 <label htmlFor="remember">REMEMBER ME</label>
// //               </div>
// //               <button type="submit" className="login-button">LOGIN</button>
// //             </form>
// //             <div className="signup-link">
// //               <p>Dont have an account?</p>
// //               <Link to="/signup">
// //                 <button className="signup-button">SIGN UP</button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './LoginPage.css';
// import axios from '../axios'; // Import your configured axios instance

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);

//       // If "Remember Me" is checked, save the token in a more persistent way
//       if (rememberMe) {
//         // Optional: Implement additional logic for persistent sessions
//       }

//       navigate('/main'); // Redirect to MainPage on success
//     } catch (error) {
//       console.error('Login failed:', error.response?.data?.message || error.message);
//       setError('Login failed. Please check your email and password.');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-layout">
//         <div className="image-container">
//           <img src="loginnns.svg" alt="Login Image" />
//         </div>
//         <div className="content-section">
//           <div className="login-container">
//             <h2>Please login to your account</h2>
//             <form onSubmit={handleLogin} className="login-form">
//               {error && <div className="error-message">{error}</div>}
//               <div className="form-group">
//                 <label htmlFor="email">EMAIL ADDRESS</label>
//                 <input 
//                   id="email"
//                   type="email" 
//                   value={email} 
//                   onChange={(e) => setEmail(e.target.value)} 
//                   required 
//                   placeholder="Email Address"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">PASSWORD</label>
//                 <input 
//                   id="password"
//                   type="password" 
//                   value={password} 
//                   onChange={(e) => setPassword(e.target.value)} 
//                   required 
//                   placeholder="Password"
//                 />
//               </div>
//               <div className="remember-me">
//                 <input 
//                   type="checkbox" 
//                   id="remember" 
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//                 <label htmlFor="remember">REMEMBER ME</label>
//               </div>
//               <button type="submit" className="login-button">LOGIN</button>
//             </form>
//             <div className="signup-link">
//               <p>Don't have an account?</p>
//               <Link to="/signup">
//                 <button className="signup-button">SIGN UP</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import axios from '../axios'; // Import your configured axios instance

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);

      // If "Remember Me" is checked, save the token in a more persistent way
      if (rememberMe) {
        // Optional: Implement additional logic for persistent sessions
      }

      navigate('/main'); // Redirect to MainPage on success
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="image-section"></div>
        <div className="content-section">
          <h2>Please login to your account</h2>
          <form onSubmit={handleLogin} className="login-form">
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input 
                id="email"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input 
                id="password"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="Password"
              />
            </div>
            <div className="remember-me">
              <input 
                type="checkbox" 
                id="remember" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">REMEMBER ME</label>
            </div>
            <button type="submit" className="login-button">LOGIN</button>
          </form>
          <div className="signup-link">
            <p>Don't have an account?</p>
            <Link to="/signup">
              <button className="signup-button">SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
