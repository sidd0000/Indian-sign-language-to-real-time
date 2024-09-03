// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure Route is imported
// import HomePage from './components/HomePage/Homepage';
// import LoginPage from './components/Login/LoginPage';
// import SignUpPage from './components/SignUp/SignUpPage';
// import MainPage from './components/MainPage/MainPage

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
          
//           <Route path="/" element={<HomePage />} /> {/* HomePage route */}
//           <Route path="/main" element={<MainPage />}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };


// import React from 'react';
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

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'; // Ensure path and case sensitivity
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/SignUp/SignUpPage';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage route */}
          <Route path="/main" element={<MainPage />} /> {/* MainPage route */}
          <Route path="/login" element={<LoginPage />} /> {/* LoginPage route */}
          <Route path="/signup" element={<SignUpPage />} /> {/* SignUpPage route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
