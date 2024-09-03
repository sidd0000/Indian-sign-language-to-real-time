// // // src/components/SignUp/SignUpPage.jsx
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './SignUpPage.css';
// // import axios from '../axios'; // Import your configured axios instance

// // const handleSignUp = async (e) => {
// //   e.preventDefault();
// //   try {
// //     await axios.post('/auth/register', { name, email, password });
// //     window.location.href = '/login'; // Redirect on success
// //   } catch (error) {
// //     console.error('Sign-up failed:', error.response?.data?.message || error.message);
// //     alert('Sign-up failed');
// //   }
// // };
// // const SignUpPage = () => {
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const handleSignUp = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await axios.post('/api/auth/register', { name, email, password });
// //             // Redirect or handle sign-up success
// //             window.location.href = '/login'; // Redirect to login page or another page
// //         } catch (error) {
// //             console.error('Sign-up failed:', error.response?.data?.error || error.message);
// //             // Handle sign-up failure
// //         }
// //     };

// //     return (
// //         <div className="signup-container">
// //             <h2>Sign Up</h2>
// //             <form onSubmit={handleSignUp} className="signup-form">
// //                 <div className="form-group">
// //                     <label htmlFor="name">Name:</label>
// //                     <input 
// //                         id="name"
// //                         type="text" 
// //                         value={name} 
// //                         onChange={(e) => setName(e.target.value)} 
// //                         required 
// //                         placeholder="Enter your name"
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="email">Email:</label>
// //                     <input 
// //                         id="email"
// //                         type="email" 
// //                         value={email} 
// //                         onChange={(e) => setEmail(e.target.value)} 
// //                         required 
// //                         placeholder="Enter your email"
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="password">Password:</label>
// //                     <input 
// //                         id="password"
// //                         type="password" 
// //                         value={password} 
// //                         onChange={(e) => setPassword(e.target.value)} 
// //                         required 
// //                         placeholder="Enter your password"
// //                     />
// //                 </div>
// //                 <button type="submit" className="signup-button">Sign Up</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default SignUpPage;
// import React, { useState } from 'react';
// import './SignUpPage.css';
// import axios from '../axios'; // Import your configured axios instance

// const SignUpPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/auth/register', { name, email, password });
//       window.location.href = '/login'; // Redirect on success
//     } catch (error) {
//       console.error('Sign-up failed:', error.response?.data?.message || error.message);
//       alert('Sign-up failed');
//     }
//   };

//   return (
//     <div className="signup-page">
//     <div className="container">
//       <div className="image-container">
//         <img src="real_id sign up.svg" alt="Signup" />
//       </div>
//       <div className="form-container">
//         <h2>Create Your account for FREE!!</h2>
//         <form onSubmit={handleSignUp}>
//           <label htmlFor="name">USER NAME</label>
//           <input 
//             type="text" 
//             id="name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             placeholder="User Name" 
//             required 
//           />
          
//           <label htmlFor="email">EMAIL ID</label>
//           <input 
//             type="email" 
//             id="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder="Email ID" 
//             required 
//           />
          
//           <label htmlFor="password">NEW PASSWORD</label>
//           <input 
//             type="password" 
//             id="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder="New Password" 
//             required 
//           />
          
//           <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
//           <input 
//             type="password" 
//             id="confirm-password" 
//             placeholder="Confirm Password" 
//             required 
//           />
          
//           <button type="submit" className="signup-button">SIGN UP</button>
//         </form>
//       </div>
//     </div>
//   </div>
// );
// };

// export default SignUpPage;
import React, { useState } from 'react';
import './SignUpPage.css';
import axios from '../axios'; // Import your configured axios instance

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post('/auth/register', { name, email, password });
      window.location.href = '/login'; // Redirect on success
    } catch (error) {
      console.error('Sign-up failed:', error.response?.data?.message || error.message);
      alert('Sign-up failed');
    }
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="image-container">
          <img src="real_id sign up.svg" alt="Signup" />
        </div>
        <div className="form-container">
          <h2>Create Your Account for FREE!</h2>
          <form onSubmit={handleSignUp}>
            <label htmlFor="name">User Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="User Name" 
              required 
            />
            
            <label htmlFor="email">Email ID</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email ID" 
              required 
            />
            
            <label htmlFor="password">New Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="New Password" 
              required 
            />
            
            <label htmlFor="confirm-password">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="Confirm Password" 
              required 
            />
            
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
