import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Ensure this URL is correct
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;


// export default instance;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage/Homepage';
// import LoginPage from './components/Login/LoginPage';
// import SignUpPage from './components/SignUp/SignUpPage';
// import MainPage from './components/MainPage/MainPage';

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<HomePage />} /> {/* HomePage route */}
//           <Route path="/main" element={<MainPage />} /> {/* MainPage route */}
//           <Route path="/login" element={<LoginPage />} /> {/* LoginPage route */}
//           <Route path="/signup" element={<SignUpPage />} /> {/* SignUpPage route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };
