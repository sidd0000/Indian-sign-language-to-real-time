// // // import React, { useState } from 'react';
// // // import WebcamCapture from './WebCamCapture/WebCamCapture'; // Adjust the path if necessary

// // // const MainPage = () => {
// // //   const [isWebcamActive, setIsWebcamActive] = useState(false);

// // //   // Function to handle starting the webcam
// // //   const handleStartWebcam = () => {
// // //     setIsWebcamActive(true);
// // //   };

// // //   return (
// // //     <div className="main-page">
// // //       <h1>Welcome to the Main Page</h1>
// // //       {/* Conditionally render button or WebcamCapture based on isWebcamActive */}
// // //       {!isWebcamActive ? (
// // //         <button onClick={handleStartWebcam} className="start-camera-button">Start Camera</button>
// // //       ) : (
// // //         <WebcamCapture />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default MainPage;
// // import React, { useState } from 'react';
// // import WebcamCapture from './WebCamCapture/WebCamCapture'; // Adjust the path if necessary
// // import './MainPage.css'; // Import CSS file

// // const MainPage = () => {
// //   const [isWebcamActive, setIsWebcamActive] = useState(false);

// //   const handleStartWebcam = () => {
// //     setIsWebcamActive(true);
// //   };

// //   return (
// //     <div className="main-page">
// //       <header className="header">
// //         <h1>Welcome to Indian Sign Language Translation</h1>
// //         <img src="/path-to-your-theme-gif.gif" alt="Indian Sign Language" className="theme-gif" />
// //       </header>
// //       <main className="content">
// //         {!isWebcamActive ? (
// //           <button onClick={handleStartWebcam} className="start-camera-button">Start Camera</button>
// //         ) : (
// //           <WebcamCapture />
// //         )}
// //       </main>
// //       <footer className="footer">
// //         <p>Enhancing communication through technology.</p>
// //         <img src="/path-to-footer-gif.gif" alt="Footer Animation" className="footer-gif" />
// //       </footer>
// //     </div>
// //   );
// // };

// // export default MainPage;
// import React, { useState } from 'react';
// import WebcamCapture from './WebCamCapture/WebCamCapture'; // Adjust the path if necessary
// import './MainPage.css'; // Import CSS file

// const MainPage = () => {
//   const [isWebcamActive, setIsWebcamActive] = useState(false);

//   const handleStartWebcam = () => {
//     setIsWebcamActive(true);
//   };

//   return (
//     <div className="main-page">
//       <header className="header">
//         <h1>Welcome to Indian Sign Language Translation</h1>
//         {/* Embed the GIF using an iframe */}
//         {/* <div className="theme-gif-container">
//           <iframe
//             src="https://giphy.com/embed/EqrIrilix4ysLpavlm"
//             width="480"
//             height="322"
//             frameBorder="0"
//             className="giphy-embed"
//             allowFullScreen
//             title="Indian Sign Language Theme"
//           ></iframe>
//           <p>
//             <a href="https://giphy.com/gifs/nickdrake-EqrIrilix4ysLpavlm">via GIPHY</a>
//           </p>
//         </div> */}
//       </header>
//       <main className="content">
//         {!isWebcamActive ? (
//           <button onClick={handleStartWebcam} className="start-camera-button">
//             <span role="img" aria-label="camera">📸</span> Start Camera
//           </button>
//         ) : (
//           <WebcamCapture />
//         )}
//       </main>
//       <footer className="footer">
//         <p>Enhancing communication through technology.</p>
//         <img src="/path-to-footer-gif.gif" alt="Footer Animation" className="footer-gif" />
//       </footer>
//     </div>
//   );
// };

// export default MainPage;
import React, { useState } from 'react';
import WebcamCapture from './WebCamCapture/WebCamCapture'; // Adjust the path if necessary
import './MainPage.css'; // Import CSS file

const MainPage = () => {
  const [isWebcamActive, setIsWebcamActive] = useState(false);

  const handleStartWebcam = () => {
    setIsWebcamActive(true);
  };

  return (
    <div className="main-page">
      <header className="header">
        <h1>Welcome to Indian Sign Language Translation</h1>
      </header>
      
      <main className="content">
        {!isWebcamActive ? (
          <button onClick={handleStartWebcam} className="start-camera-button">
            <span role="img" aria-label="camera">📸</span> Start Camera
          </button>
        ) : (
          <WebcamCapture />
        )}
        
        <section className="how-it-works">
          <h2>How This Works</h2>
          <p>Our platform uses cutting-edge technology to translate Indian Sign Language into text in real-time. The webcam captures your gestures, and our AI-powered model interprets them, providing you with accurate translations on the fly.</p>
          <div className="steps-container">
            <div className="step">
              <span role="img" aria-label="camera">📸</span>
              <h3>Step 1: Start Camera</h3>
              <p>Click on the "Start Camera" button to activate your webcam.</p>
            </div>
            <div className="step">
              <span role="img" aria-label="gesture">✋</span>
              <h3>Step 2: Perform Sign Language</h3>
              <p>Use your hand gestures in front of the camera to perform Indian Sign Language.</p>
            </div>
            <div className="step">
              <span role="img" aria-label="text">💬</span>
              <h3>Step 3: Get Real-Time Translation</h3>
              <p>See the translated text displayed below the camera feed instantly.</p>
            </div>
          </div>
        </section>

        <section className="api-integration">
          <h2>API Integration</h2>
          <p>Our platform can be integrated with other services through APIs. This section is reserved for advanced functionalities like connecting with third-party services or expanding the scope of our application.</p>
          <button className="api-button">Learn More About Our API</button>
        </section>
      </main>
      
      
    </div>
  );
};

export default MainPage;
