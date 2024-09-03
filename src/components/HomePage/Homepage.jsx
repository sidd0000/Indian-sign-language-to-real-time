// // // // src/components/HomePage.jsx
// // // import React from 'react';
// // // import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// // // import './Homepage.css'; // Import the CSS file
// // // import AboutPage from '../About/About';
// // // import ContactPage from '../Contact/Contact';
// // // import HelpdeskPage from '../Helpdesk/Helpdesk';
// // // const HomePage = () => {
// // //     return (
// // //         <div>
// // //             <header>
// // //                 <nav className="nav">
// // //                     <div className="leftnav">
// // //                         <a href='#about-section' className="poppins">About</a>
// // //                         <a href='#Contact-section' className="poppins">Contact</a>
// // //                         <a href='#Helpdesk-section' className="poppins">Helpdesk</a>
// // //                     </div>
// // //                     <div className="rightnav">
// // //                         <Link to="/login">
// // //                             <button className="cleanButton">Get Started</button>
// // //                         </Link>
// // //                     </div>
// // //                 </nav>
// // //             </header>
// // //             <main className="main">
// // //                 <div className="content">
// // //                     <h1 className="devanagari">संवेदना</h1>
// // //                     <h2>LANGUAGE</h2>
// // //                     <p className="subHeading">THAT EVOKES FEELING</p>
// // //                     <p className="description">संकेत भाषा से न केवल आवाज़, बल्कि भावनाओं को भी सुन सकते हैं।</p>
// // //                 </div>
// // //                 <div className="imageContainer">
// // //                     <img src="image --4.svg" alt="Ear Illustration" />
// // //                 </div>
// // //             </main>
// // //             <section id="about-section">
// // //                 <AboutPage />
// // //             </section>
// // //             <section id="Contact-section">
// // //                 <ContactPage />
// // //             </section>
// // //             <section id="Helpdesk-section">
// // //                 <HelpdeskPage />
// // //             </section>
           
// // //         </div>
// // //     );
// // // };

// // // export default HomePage;
// // // src/components/HomePage.jsx
// // import React from 'react';
// // import Navbar from '../Navbar/Navbar'; // Import the Navbar component
// // import AboutPage from '../About/About';
// // import ContactPage from '../Contact/Contact';
// // import HelpdeskPage from '../Helpdesk/Helpdesk';
// // import './Homepage.css'; // Import the CSS file for HomePage

// // const HomePage = () => {
// //   return (
// //     <div>
// //       <Navbar /> {/* Use the Navbar component */}
// //       <main className="main">
// //         <div className="content">
// //           <h1 className="devanagari">संवेदना</h1>
// //           <h2>LANGUAGE</h2>
// //           <p className="subHeading">THAT EVOKES FEELING</p>
// //           <p className="description">संकेत भाषा से न केवल आवाज़, बल्कि भावनाओं को भी सुन सकते हैं।</p>
// //         </div>
// //         <div className="imageContainer">
// //           <img src="image --4.svg" alt="Ear Illustration" />
// //         </div>
// //       </main>
// //       <section id="about-section">
// //         <AboutPage />
// //       </section>
// //       <section id="Contact-section">
// //         <ContactPage />
// //       </section>
// //       <section id="Helpdesk-section">
// //         <HelpdeskPage />
// //       </section>
// //     </div>
// //   );
// // };

// // export default HomePage;
// // src/components/HomePage.jsx
// import React from 'react';
// import Navbar from '../Navbar/Navbar'; // Import the Navbar component
// import AboutPage from '../About/About';
// import ContactPage from '../Contact/Contact';
// import HelpdeskPage from '../Helpdesk/Helpdesk';
// import './Homepage.css'; // Import the CSS file for HomePage

// const HomePage = () => {
//   return (
//     <div className="homepage">
//     <Navbar /> {/* Use the Navbar component */}
//     <main className="main">
//       <div className="content">
//         <h1 className="devanagari">संवेदना</h1>
//         <h2>LANGUAGE</h2>
//         <p className="subHeading">THAT EVOKES FEELING</p>
//         <p className="description">
//           <b>संकेत भाषा से न केवल आवाज़, बल्कि भावनाओं को भी सुन सकते हैं।</b>
//         </p>
//       </div>
//       <div className="imageContainer">
//         <img src="image --4.svg" alt="Ear Illustration" />
//       </div>
//     </main>
//     <section id="about-section">
//       <AboutPage />
//     </section>
//     <section id="contact-section">
//       <ContactPage />
//     </section>
//     <section id="helpdesk-section">
//       <HelpdeskPage />
//     </section>
//   </div>
//   );
// };

// export default HomePage;
import React from 'react';
import Navbar from '../Navbar/Navbar'; // Import the Navbar component
import AboutPage from '../About/About';
import ContactPage from '../Contact/Contact';
import HelpdeskPage from '../Helpdesk/Helpdesk';
import './Homepage.css'; // Import the CSS file for HomePage

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar /> {/* Use the Navbar component */}
      <main className="main">
        <div className="content">
          <h1 className="devanagari">संवेदना</h1>
          <h2 style={{ color: 'white' }}>LANGUAGE</h2>

          <p className="subHeading">THAT EVOKES FEELING</p>
          <p className="description">
            <b>संकेत भाषा से न केवल आवाज़, बल्कि भावनाओं को भी सुन सकते हैं।</b>
          </p>
        </div>
        <div className="imageContainer">
          {/* <img src="image --4.svg" alt="Ear Illustration" /> */}
        </div>
      </main>
      <section id="about-section">
        <AboutPage />
      </section>
      <section id="contact-section">
        <ContactPage />
      </section>
      <section id="helpdesk-section">
        <HelpdeskPage />
      </section>
    </div>
  );
};

export default HomePage;
