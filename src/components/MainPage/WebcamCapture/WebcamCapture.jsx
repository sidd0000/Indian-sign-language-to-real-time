// // // // // // // // // // // // // // // // // import React, { useRef, useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // // import axios from '../../axios'; // Import your configured axios instance

// // // // // // // // // // // // // // // // // const WebCamCapture = () => {
// // // // // // // // // // // // // // // // //   const videoRef = useRef(null);
// // // // // // // // // // // // // // // // //   const [prediction, setPrediction] = useState('');

// // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // //     const startWebcam = async () => {
// // // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // // // // // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // // //     const interval = setInterval(async () => {
// // // // // // // // // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // // // // // // // // //         const canvas = document.createElement('canvas');
// // // // // // // // // // // // // // // // //         const context = canvas.getContext('2d');
// // // // // // // // // // // // // // // // //         canvas.width = videoRef.current.videoWidth;
// // // // // // // // // // // // // // // // //         canvas.height = videoRef.current.videoHeight;
// // // // // // // // // // // // // // // // //         context.drawImage(videoRef.current, 0, 0);

// // // // // // // // // // // // // // // // //         const imageData = canvas.toDataURL('image/jpeg');

// // // // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // // // //           const response = await axios.post('/predict', { image: imageData });
// // // // // // // // // // // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // // // //           console.error('Error sending image to backend:', error);
// // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     }, 2000); // Adjust the interval time as needed

// // // // // // // // // // // // // // // // //     startWebcam();

// // // // // // // // // // // // // // // // //     return () => clearInterval(interval);
// // // // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // // // //       <video ref={videoRef} autoPlay playsInline width="640" height="480"></video>
// // // // // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // // // // //         <h3>Prediction: {prediction}</h3>
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default WebCamCapture;
// // // // // // // // // // // // // // // // import React, { useRef, useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // import axios from '../../axios'; // Import your configured axios instance

// // // // // // // // // // // // // // // // const WebCamCapture = () => {
// // // // // // // // // // // // // // // //   const videoRef = useRef(null);
// // // // // // // // // // // // // // // //   const [prediction, setPrediction] = useState('');

// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     const startWebcam = async () => {
// // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // // // // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // //     const interval = setInterval(async () => {
// // // // // // // // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // // // // // // // //         const canvas = document.createElement('canvas');
// // // // // // // // // // // // // // // //         const context = canvas.getContext('2d');
// // // // // // // // // // // // // // // //         canvas.width = videoRef.current.videoWidth;
// // // // // // // // // // // // // // // //         canvas.height = videoRef.current.videoHeight;
// // // // // // // // // // // // // // // //         context.drawImage(videoRef.current, 0, 0);

// // // // // // // // // // // // // // // //         const imageData = canvas.toDataURL('image/jpeg');

// // // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // // //           const response = await axios.post('/predict', { image: imageData });
// // // // // // // // // // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // // //           console.error('Error sending image to backend:', error);
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     }, 2000); // Adjust the interval time as needed

// // // // // // // // // // // // // // // //     startWebcam();

// // // // // // // // // // // // // // // //     return () => clearInterval(interval);
// // // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // // //       <video ref={videoRef} autoPlay playsInline width="640" height="480"></video>
// // // // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // // // //         <h3>Prediction: {prediction}</h3>
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default WebCamCapture;
// // // // // // // // // // // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // // // const WebCamCapture = () => {
// // // // // // // // // // // // // // //   const videoRef = useRef(null);
// // // // // // // // // // // // // // //   const [prediction, setPrediction] = useState(null);

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     // Setup webcam stream
// // // // // // // // // // // // // // //     const setupWebcam = async () => {
// // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // // // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // // // // // // // // //         videoRef.current.play();
// // // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     setupWebcam();

// // // // // // // // // // // // // // //     // Interval function to capture frames and send to backend
// // // // // // // // // // // // // // //     const interval = setInterval(async () => {
// // // // // // // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // // // // // // //         const canvas = document.createElement('canvas');
// // // // // // // // // // // // // // //         const context = canvas.getContext('2d');
// // // // // // // // // // // // // // //         canvas.width = videoRef.current.videoWidth;
// // // // // // // // // // // // // // //         canvas.height = videoRef.current.videoHeight;
// // // // // // // // // // // // // // //         context.drawImage(videoRef.current, 0, 0);

// // // // // // // // // // // // // // //         const imageData = canvas.toDataURL('image/jpeg');

// // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // //           const response = await axios.post('/predict', { image: imageData }, {
// // // // // // // // // // // // // // //             headers: {
// // // // // // // // // // // // // // //               'Content-Type': 'application/json'
// // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // //           });
// // // // // // // // // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     }, 2000);

// // // // // // // // // // // // // // //     // Cleanup function to stop webcam and clear interval
// // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // // // // // // //         const stream = videoRef.current.srcObject;
// // // // // // // // // // // // // // //         if (stream) {
// // // // // // // // // // // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //       clearInterval(interval);
// // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // // //         {prediction ? <h3>Prediction: {prediction}</h3> : <h3>No prediction yet</h3>}
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default WebCamCapture;
// // // // // // // // // // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // // // // // // // // // import axios from '../../axios'; // Adjust the path if necessary

// // // // // // // // // // // // // // const WebCamCapture = () => {
// // // // // // // // // // // // // //   const videoRef = useRef(null);
// // // // // // // // // // // // // //   const [prediction, setPrediction] = useState(null);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     // Setup webcam stream
// // // // // // // // // // // // // //     const setupWebcam = async () => {
// // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // // // // // // // //         videoRef.current.play();
// // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     setupWebcam();

// // // // // // // // // // // // // //     // Interval function to capture frames and send to backend
// // // // // // // // // // // // // //     const interval = setInterval(async () => {
// // // // // // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // // // // // //         const canvas = document.createElement('canvas');
// // // // // // // // // // // // // //         const context = canvas.getContext('2d');
// // // // // // // // // // // // // //         canvas.width = videoRef.current.videoWidth;
// // // // // // // // // // // // // //         canvas.height = videoRef.current.videoHeight;
// // // // // // // // // // // // // //         context.drawImage(videoRef.current, 0, 0);

// // // // // // // // // // // // // //         const imageData = canvas.toDataURL('image/jpeg'); // Convert to base64

// // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // //           const response = await axios.post('/predict', { image: imageData }, {
// // // // // // // // // // // // // //             headers: {
// // // // // // // // // // // // // //               'Content-Type': 'application/json'
// // // // // // // // // // // // // //             }
// // // // // // // // // // // // // //           });
// // // // // // // // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     }, 2000);

// // // // // // // // // // // // // //     // Cleanup function to stop webcam and clear interval
// // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // // // // // //         const stream = videoRef.current.srcObject;
// // // // // // // // // // // // // //         if (stream) {
// // // // // // // // // // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //       clearInterval(interval);
// // // // // // // // // // // // // //     };
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // //         {prediction ? <h3>Prediction: {prediction}</h3> : <h3>No prediction yet</h3>}
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default WebCamCapture;
// // // // // // // // // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // // // // // // // // import axios from '../../axios'; // Adjust the path if necessary

// // // // // // // // // // // // // const WebCamCapture = () => {
// // // // // // // // // // // // //   const videoRef = useRef(null);
// // // // // // // // // // // // //   const [prediction, setPrediction] = useState(null);

// // // // // // // // // // // // //   const captureImage = () => {
// // // // // // // // // // // // //     if (videoRef.current) {
// // // // // // // // // // // // //       const canvas = document.createElement('canvas');
// // // // // // // // // // // // //       const context = canvas.getContext('2d');
// // // // // // // // // // // // //       canvas.width = videoRef.current.videoWidth;
// // // // // // // // // // // // //       canvas.height = videoRef.current.videoHeight;
// // // // // // // // // // // // //       context.drawImage(videoRef.current, 0, 0);

// // // // // // // // // // // // //       // Convert the canvas to a Blob (image file)
// // // // // // // // // // // // //       return new Promise((resolve) => {
// // // // // // // // // // // // //         canvas.toBlob((blob) => {
// // // // // // // // // // // // //           resolve(blob);
// // // // // // // // // // // // //         }, 'image/jpeg');
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const setupWebcam = async () => {
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // // // // // // //         videoRef.current.play();
// // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     setupWebcam();

// // // // // // // // // // // // //     const interval = setInterval(async () => {
// // // // // // // // // // // // //       const imageBlob = await captureImage();
// // // // // // // // // // // // //       if (imageBlob) {
// // // // // // // // // // // // //         const formData = new FormData();
// // // // // // // // // // // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // // // // // // // // // // //         try {
// // // // // // // // // // // // //           const response = await axios.post('/predict', formData, {
// // // // // // // // // // // // //             headers: {
// // // // // // // // // // // // //               'Content-Type': 'multipart/form-data',
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //           });
// // // // // // // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     }, 2000);

// // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // // // // //         const stream = videoRef.current.srcObject;
// // // // // // // // // // // // //         if (stream) {
// // // // // // // // // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //       clearInterval(interval);
// // // // // // // // // // // // //     };
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div>
// // // // // // // // // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // // // // // // // // //       <div>
// // // // // // // // // // // // //         {prediction ? <h3>Prediction: {prediction}</h3> : <h3>No prediction yet</h3>}
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default WebCamCapture;
// // // // // // // // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // // // // // // // import axios from '../../axios'; // Adjust the path if necessary
// // // // // // // // // // // // import './WebCamCapture.css'; // Import the CSS file

// // // // // // // // // // // // const WebCamCapture = () => {
// // // // // // // // // // // //   const videoRef = useRef(null);
// // // // // // // // // // // //   const [prediction, setPrediction] = useState(null);
// // // // // // // // // // // //   const [language, setLanguage] = useState('en'); // Default language

// // // // // // // // // // // //   const captureImage = () => {
// // // // // // // // // // // //     if (videoRef.current) {
// // // // // // // // // // // //       const canvas = document.createElement('canvas');
// // // // // // // // // // // //       const context = canvas.getContext('2d');
// // // // // // // // // // // //       canvas.width = videoRef.current.videoWidth;
// // // // // // // // // // // //       canvas.height = videoRef.current.videoHeight;
// // // // // // // // // // // //       context.drawImage(videoRef.current, 0, 0);

// // // // // // // // // // // //       return new Promise((resolve) => {
// // // // // // // // // // // //         canvas.toBlob((blob) => {
// // // // // // // // // // // //           resolve(blob);
// // // // // // // // // // // //         }, 'image/jpeg');
// // // // // // // // // // // //       });
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const setupWebcam = async () => {
// // // // // // // // // // // //       try {
// // // // // // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // // // // // //         videoRef.current.play();
// // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     setupWebcam();

// // // // // // // // // // // //     const interval = setInterval(async () => {
// // // // // // // // // // // //       const imageBlob = await captureImage();
// // // // // // // // // // // //       if (imageBlob) {
// // // // // // // // // // // //         const formData = new FormData();
// // // // // // // // // // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // // // // // // // // // //         try {
// // // // // // // // // // // //           const response = await axios.post('/predict', formData, {
// // // // // // // // // // // //             headers: {
// // // // // // // // // // // //               'Content-Type': 'multipart/form-data',
// // // // // // // // // // // //             },
// // // // // // // // // // // //           });
// // // // // // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // // // // // // // //         }
// // // // // // // // // // // //       }
// // // // // // // // // // // //     }, 2000);

// // // // // // // // // // // //     return () => {
// // // // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // // // //         const stream = videoRef.current.srcObject;
// // // // // // // // // // // //         if (stream) {
// // // // // // // // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // // // // // // // //         }
// // // // // // // // // // // //       }
// // // // // // // // // // // //       clearInterval(interval);
// // // // // // // // // // // //     };
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const handleLanguageChange = (event) => {
// // // // // // // // // // // //     setLanguage(event.target.value);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="webcam-container">
// // // // // // // // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // // // // // // // //       <div className="controls">
// // // // // // // // // // // //         <button onClick={() => console.log('Capture Image')}>Capture Image</button>
// // // // // // // // // // // //         <select value={language} onChange={handleLanguageChange} className="language-selector">
// // // // // // // // // // // //           <option value="en">English</option>
// // // // // // // // // // // //           <option value="hi">Hindi</option>
// // // // // // // // // // // //           {/* Add more languages as needed */}
// // // // // // // // // // // //         </select>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       <div className="captured-image">
// // // // // // // // // // // //         {prediction ? <h3>Prediction: {prediction}</h3> : <h3>No prediction yet</h3>}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default WebCamCapture;
// // // // // // // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // // // // // // import axios from '../../axios'; // Adjust the path if necessary
// // // // // // // // // // // import './WebCamCapture.css'; // Import the CSS file

// // // // // // // // // // // const WebCamCapture = () => {
// // // // // // // // // // //   const videoRef = useRef(null);
// // // // // // // // // // //   const [prediction, setPrediction] = useState(null);
// // // // // // // // // // //   const [language, setLanguage] = useState('en'); // Default language

// // // // // // // // // // //   const captureImage = () => {
// // // // // // // // // // //     if (videoRef.current) {
// // // // // // // // // // //       const canvas = document.createElement('canvas');
// // // // // // // // // // //       const context = canvas.getContext('2d');
// // // // // // // // // // //       canvas.width = videoRef.current.videoWidth;
// // // // // // // // // // //       canvas.height = videoRef.current.videoHeight;
// // // // // // // // // // //       context.drawImage(videoRef.current, 0, 0);

// // // // // // // // // // //       return new Promise((resolve) => {
// // // // // // // // // // //         canvas.toBlob((blob) => {
// // // // // // // // // // //           resolve(blob);
// // // // // // // // // // //         }, 'image/jpeg');
// // // // // // // // // // //       });
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const setupWebcam = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // // // // //         videoRef.current.play();
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     setupWebcam();

// // // // // // // // // // //     const interval = setInterval(async () => {
// // // // // // // // // // //       const imageBlob = await captureImage();
// // // // // // // // // // //       if (imageBlob) {
// // // // // // // // // // //         const formData = new FormData();
// // // // // // // // // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // // // // // // // // //         try {
// // // // // // // // // // //           const response = await axios.post('/predict', formData, {
// // // // // // // // // // //             headers: {
// // // // // // // // // // //               'Content-Type': 'multipart/form-data',
// // // // // // // // // // //             },
// // // // // // // // // // //             params: { lang: language } // Send the selected language as a query parameter
// // // // // // // // // // //           });
// // // // // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // // // // //         } catch (error) {
// // // // // // // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // // // // // // //         }
// // // // // // // // // // //       }
// // // // // // // // // // //     }, 2000);

// // // // // // // // // // //     return () => {
// // // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // // //         const stream = videoRef.current.srcObject;
// // // // // // // // // // //         if (stream) {
// // // // // // // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // // // // // // //         }
// // // // // // // // // // //       }
// // // // // // // // // // //       clearInterval(interval);
// // // // // // // // // // //     };
// // // // // // // // // // //   }, [language]); // Re-run the effect if the language changes

// // // // // // // // // // //   const handleLanguageChange = (event) => {
// // // // // // // // // // //     setLanguage(event.target.value);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="webcam-container">
// // // // // // // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // // // // // // //       <div className="controls">
// // // // // // // // // // //         <label htmlFor="language-selector">Select Language:</label>
// // // // // // // // // // //         <select id="language-selector" value={language} onChange={handleLanguageChange} className="language-selector">
// // // // // // // // // // //           <option value="en">English</option>
// // // // // // // // // // //           <option value="hi">Hindi</option>
// // // // // // // // // // //           {/* Add more languages as needed */}
// // // // // // // // // // //         </select>
// // // // // // // // // // //         {prediction && <h3>Prediction: {prediction}</h3>}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default WebCamCapture;
// // // // // // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // // // // // import axios from '../../axios'; // Adjust the path if necessary
// // // // // // // // // // import './WebCamCapture.css'; // Import the CSS file

// // // // // // // // // // const WebCamCapture = () => {
// // // // // // // // // //   const videoRef = useRef(null);
// // // // // // // // // //   const [prediction, setPrediction] = useState(null);
// // // // // // // // // //   const [language, setLanguage] = useState('en'); // Default language

// // // // // // // // // //   const captureImage = () => {
// // // // // // // // // //     if (videoRef.current) {
// // // // // // // // // //       const canvas = document.createElement('canvas');
// // // // // // // // // //       const context = canvas.getContext('2d');
// // // // // // // // // //       canvas.width = videoRef.current.videoWidth;
// // // // // // // // // //       canvas.height = videoRef.current.videoHeight;
// // // // // // // // // //       context.drawImage(videoRef.current, 0, 0);

// // // // // // // // // //       return new Promise((resolve) => {
// // // // // // // // // //         canvas.toBlob((blob) => {
// // // // // // // // // //           resolve(blob);
// // // // // // // // // //         }, 'image/jpeg');
// // // // // // // // // //       });
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const setupWebcam = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // // // //         videoRef.current.play();
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     setupWebcam();

// // // // // // // // // //     const processFrame = async () => {
// // // // // // // // // //       const imageBlob = await captureImage();
// // // // // // // // // //       if (imageBlob) {
// // // // // // // // // //         const formData = new FormData();
// // // // // // // // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // // // // // // // //         try {
// // // // // // // // // //           const response = await axios.post('/predict', formData, {
// // // // // // // // // //             headers: {
// // // // // // // // // //               'Content-Type': 'multipart/form-data',
// // // // // // // // // //             },
// // // // // // // // // //             params: { lang: language } // Send the selected language as a query parameter
// // // // // // // // // //           });
// // // // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // // // //         } catch (error) {
// // // // // // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // // // // // //         }
// // // // // // // // // //       }
// // // // // // // // // //       requestAnimationFrame(processFrame); // Schedule next frame
// // // // // // // // // //     };

// // // // // // // // // //     processFrame(); // Start processing frames

// // // // // // // // // //     return () => {
// // // // // // // // // //       if (videoRef.current) {
// // // // // // // // // //         const stream = videoRef.current.srcObject;
// // // // // // // // // //         if (stream) {
// // // // // // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // // // // // //         }
// // // // // // // // // //       }
// // // // // // // // // //     };
// // // // // // // // // //   }, [language]); // Re-run the effect if the language changes

// // // // // // // // // //   const handleLanguageChange = (event) => {
// // // // // // // // // //     setLanguage(event.target.value);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="webcam-container">
// // // // // // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // // // // // //       <div className="controls">
// // // // // // // // // //         <label htmlFor="language-selector">Select Language:</label>
// // // // // // // // // //         <select id="language-selector" value={language} onChange={handleLanguageChange} className="language-selector">
// // // // // // // // // //           <option value="en">English</option>
// // // // // // // // // //           <option value="hi">Hindi</option>
// // // // // // // // // //           {/* Add more languages as needed */}
// // // // // // // // // //         </select>
// // // // // // // // // //         {prediction && <h3>Prediction: {prediction}</h3>}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default WebCamCapture;
// // // // // // // // // // // a
// // // // // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // // // // import axios from '../../axios'; // Adjust the path if necessary
// // // // // // // // // import './WebCamCapture.css'; // Import the CSS file

// // // // // // // // // const WebCamCapture = () => {
// // // // // // // // //   const videoRef = useRef(null);
// // // // // // // // //   const [prediction, setPrediction] = useState(null);
// // // // // // // // //   const [language, setLanguage] = useState('en'); // Default language

// // // // // // // // //   const captureImage = () => {
// // // // // // // // //     if (videoRef.current) {
// // // // // // // // //       const canvas = document.createElement('canvas');
// // // // // // // // //       const context = canvas.getContext('2d');
// // // // // // // // //       canvas.width = videoRef.current.videoWidth;
// // // // // // // // //       canvas.height = videoRef.current.videoHeight;
// // // // // // // // //       context.drawImage(videoRef.current, 0, 0);

// // // // // // // // //       return new Promise((resolve) => {
// // // // // // // // //         canvas.toBlob((blob) => {
// // // // // // // // //           resolve(blob);
// // // // // // // // //         }, 'image/jpeg');
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const setupWebcam = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // // //         videoRef.current.play();
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     setupWebcam();

// // // // // // // // //     const processFrame = async () => {
// // // // // // // // //       const imageBlob = await captureImage();
// // // // // // // // //       if (imageBlob) {
// // // // // // // // //         const formData = new FormData();
// // // // // // // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // // // // // // //         try {
// // // // // // // // //           const response = await axios.post('/predict', formData, {
// // // // // // // // //             headers: {
// // // // // // // // //               'Content-Type': 'multipart/form-data',
// // // // // // // // //             },
// // // // // // // // //             params: { lang: language } // Send the selected language as a query parameter
// // // // // // // // //           });
// // // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // // //         } catch (error) {
// // // // // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // // // // //         }
// // // // // // // // //       }
// // // // // // // // //       requestAnimationFrame(processFrame); // Schedule next frame
// // // // // // // // //     };

// // // // // // // // //     processFrame(); // Start processing frames

// // // // // // // // //     return () => {
// // // // // // // // //       if (videoRef.current) {
// // // // // // // // //         const stream = videoRef.current.srcObject;
// // // // // // // // //         if (stream) {
// // // // // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // // // // //         }
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //   }, [language]); // Re-run the effect if the language changes

// // // // // // // // //   const handleLanguageChange = (event) => {
// // // // // // // // //     setLanguage(event.target.value);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="webcam-container">
// // // // // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // // // // //       <div className="controls">
// // // // // // // // //         <label htmlFor="language-selector">Select Language:</label>
// // // // // // // // //         <select id="language-selector" value={language} onChange={handleLanguageChange} className="language-selector">
// // // // // // // // //           <option value="en">English</option>
// // // // // // // // //           <option value="hi">Hindi</option>
// // // // // // // // //           {/* Add more languages as needed */}
// // // // // // // // //         </select>
// // // // // // // // //         {prediction && <h3>Prediction: {prediction}</h3>}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default WebCamCapture;
// // // // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // // // import axios from '../../axios'; // Adjust the path if necessary
// // // // // // // // import './WebCamCapture.css'; // Import the CSS file

// // // // // // // // const WebCamCapture = () => {
// // // // // // // //   const videoRef = useRef(null);
// // // // // // // //   const [prediction, setPrediction] = useState(null);
// // // // // // // //   const [language, setLanguage] = useState('en'); // Default language

// // // // // // // //   // Capture image from the video feed
// // // // // // // //   const captureImage = () => {
// // // // // // // //     if (videoRef.current) {
// // // // // // // //       const canvas = document.createElement('canvas');
// // // // // // // //       const context = canvas.getContext('2d');
// // // // // // // //       canvas.width = videoRef.current.videoWidth;
// // // // // // // //       canvas.height = videoRef.current.videoHeight;
// // // // // // // //       context.drawImage(videoRef.current, 0, 0);

// // // // // // // //       return new Promise((resolve) => {
// // // // // // // //         canvas.toBlob((blob) => {
// // // // // // // //           resolve(blob);
// // // // // // // //         }, 'image/jpeg');
// // // // // // // //       });
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Set up the webcam and process each frame
// // // // // // // //   useEffect(() => {
// // // // // // // //     const setupWebcam = async () => {
// // // // // // // //       try {
// // // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // // //         videoRef.current.srcObject = stream;
// // // // // // // //         videoRef.current.play();
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     setupWebcam();

// // // // // // // //     const processFrame = async () => {
// // // // // // // //       const imageBlob = await captureImage();
// // // // // // // //       if (imageBlob) {
// // // // // // // //         const formData = new FormData();
// // // // // // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // // // // // //         try {
// // // // // // // //           // Send the selected language as a query parameter
// // // // // // // //           const response = await axios.post('/predict', formData, {
// // // // // // // //             headers: {
// // // // // // // //               'Content-Type': 'multipart/form-data',
// // // // // // // //             },
// // // // // // // //             params: { lang: language }
// // // // // // // //           });
// // // // // // // //           // Update state with the prediction from the backend
// // // // // // // //           setPrediction(response.data.prediction);
// // // // // // // //         } catch (error) {
// // // // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // // // //         }
// // // // // // // //       }
// // // // // // // //       requestAnimationFrame(processFrame); // Schedule next frame
// // // // // // // //     };

// // // // // // // //     processFrame(); // Start processing frames

// // // // // // // //     return () => {
// // // // // // // //       if (videoRef.current) {
// // // // // // // //         const stream = videoRef.current.srcObject;
// // // // // // // //         if (stream) {
// // // // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // // // //         }
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //   }, [language]); // Re-run the effect if the language changes

// // // // // // // //   // Handle language selection change
// // // // // // // //   const handleLanguageChange = (event) => {
// // // // // // // //     setLanguage(event.target.value);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="webcam-container">
// // // // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // // // //       <div className="controls">
// // // // // // // //         <label htmlFor="language-selector">Select Language:</label>
// // // // // // // //         <select id="language-selector" value={language} onChange={handleLanguageChange} className="language-selector">
// // // // // // // //           <option value="en">English</option>
// // // // // // // //           <option value="hi">Hindi</option>
// // // // // // // //           {/* Add more languages as needed */}
// // // // // // // //         </select>
// // // // // // // //         {prediction && <h3>Prediction: {prediction}</h3>}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default WebCamCapture;
// // // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // // import axios from '../../axios'; // Adjust the path if necessary
// // // // // // // import './WebCamCapture.css'; // Import the CSS file

// // // // // // // const WebCamCapture = () => {
// // // // // // //   const videoRef = useRef(null);
// // // // // // //   const [prediction, setPrediction] = useState(null);
// // // // // // //   const [language, setLanguage] = useState('en'); // Default language

// // // // // // //   // Capture image from the video feed
// // // // // // //   const captureImage = () => {
// // // // // // //     if (videoRef.current) {
// // // // // // //       const canvas = document.createElement('canvas');
// // // // // // //       const context = canvas.getContext('2d');
// // // // // // //       canvas.width = videoRef.current.videoWidth;
// // // // // // //       canvas.height = videoRef.current.videoHeight;
// // // // // // //       context.drawImage(videoRef.current, 0, 0);

// // // // // // //       return new Promise((resolve) => {
// // // // // // //         canvas.toBlob((blob) => {
// // // // // // //           resolve(blob);
// // // // // // //         }, 'image/jpeg');
// // // // // // //       });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Speak the prediction after a delay


// // // // // // //   // Set up the webcam and process each frame
// // // // // // //   useEffect(() => {
// // // // // // //     const setupWebcam = async () => {
// // // // // // //       try {
// // // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // // //         videoRef.current.srcObject = stream;
// // // // // // //         videoRef.current.play();
// // // // // // //       } catch (error) {
// // // // // // //         console.error('Error accessing webcam:', error);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     setupWebcam();

// // // // // // //     const processFrame = async () => {
// // // // // // //       const imageBlob = await captureImage();
// // // // // // //       if (imageBlob) {
// // // // // // //         const formData = new FormData();
// // // // // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // // // // //         try {
// // // // // // //           // Send the selected language as a query parameter
// // // // // // //           const response = await axios.post('/predict', formData, {
// // // // // // //             headers: {
// // // // // // //               'Content-Type': 'multipart/form-data',
// // // // // // //             },
// // // // // // //             params: { lang: language }
// // // // // // //           });
// // // // // // //           // Update state with the prediction from the backend
// // // // // // //           const predictedText = response.data.prediction;
// // // // // // //           setPrediction(predictedText);
// // // // // // //           speakPrediction(predictedText); // Speak the prediction after updating state
// // // // // // //         } catch (error) {
// // // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // // //         }
// // // // // // //       }
// // // // // // //       requestAnimationFrame(processFrame); // Schedule next frame
// // // // // // //     };

// // // // // // //     processFrame(); // Start processing frames

// // // // // // //     return () => {
// // // // // // //       if (videoRef.current) {
// // // // // // //         const stream = videoRef.current.srcObject;
// // // // // // //         if (stream) {
// // // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // // //         }
// // // // // // //       }
// // // // // // //     };
// // // // // // //   }, [language]); // Re-run the effect if the language changes

// // // // // // //   // Handle language selection change
// // // // // // //   const handleLanguageChange = (event) => {
// // // // // // //     setLanguage(event.target.value);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="webcam-container">
// // // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // // //       <div className="controls">
// // // // // // //         <label htmlFor="language-selector">Select Language:</label>
// // // // // // //         <select id="language-selector" value={language} onChange={handleLanguageChange} className="language-selector">
// // // // // // //           <option value="en">English</option>
// // // // // // //           <option value="hi">Hindi</option>
// // // // // // //           {/* Add more languages as needed */}
// // // // // // //         </select>
// // // // // // //         {prediction && <h3>Prediction: {prediction}</h3>}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default WebCamCapture;
// // // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // // import axios from '../../axios';
// // // // // // import './WebCamCapture.css';

// // // // // // const WebCamCapture = () => {
// // // // // //   const videoRef = useRef(null);
// // // // // //   const [prediction, setPrediction] = useState(null);
// // // // // //   const [language, setLanguage] = useState('en'); // Default language

// // // // // //   // Capture image from the video feed
// // // // // //   const captureImage = () => {
// // // // // //     if (videoRef.current) {
// // // // // //       const canvas = document.createElement('canvas');
// // // // // //       const context = canvas.getContext('2d');
// // // // // //       canvas.width = videoRef.current.videoWidth;
// // // // // //       canvas.height = videoRef.current.videoHeight;
// // // // // //       context.drawImage(videoRef.current, 0, 0);

// // // // // //       return new Promise((resolve) => {
// // // // // //         canvas.toBlob((blob) => {
// // // // // //           resolve(blob);
// // // // // //         }, 'image/jpeg');
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   // Set up the webcam and process each frame
// // // // // //   useEffect(() => {
// // // // // //     const setupWebcam = async () => {
// // // // // //       try {
// // // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // // //         videoRef.current.srcObject = stream;
// // // // // //         videoRef.current.play();
// // // // // //       } catch (error) {
// // // // // //         console.error('Error accessing webcam:', error);
// // // // // //       }
// // // // // //     };

// // // // // //     setupWebcam();

// // // // // //     const processFrame = async () => {
// // // // // //       const imageBlob = await captureImage();
// // // // // //       if (imageBlob) {
// // // // // //         const formData = new FormData();
// // // // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // // // //         try {
// // // // // //           // Send the image and selected language to the Express backend
// // // // // //           const response = await axios.post('/predict', formData, {
// // // // // //             headers: {
// // // // // //               'Content-Type': 'multipart/form-data',
// // // // // //             },
// // // // // //             params: { lang: language } // Pass the selected language
// // // // // //           });

// // // // // //           // Update state with the prediction from the backend
// // // // // //           const predictedText = response.data.prediction;
// // // // // //           setPrediction(predictedText);

// // // // // //           // Optionally, implement the speakPrediction function to vocalize the prediction
// // // // // //           speakPrediction(predictedText);

// // // // // //         } catch (error) {
// // // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // // //         }
// // // // // //       }
// // // // // //       requestAnimationFrame(processFrame); // Schedule next frame
// // // // // //     };

// // // // // //     processFrame(); // Start processing frames

// // // // // //     return () => {
// // // // // //       if (videoRef.current) {
// // // // // //         const stream = videoRef.current.srcObject;
// // // // // //         if (stream) {
// // // // // //           stream.getTracks().forEach(track => track.stop());
// // // // // //         }
// // // // // //       }
// // // // // //     };
// // // // // //   }, [language]); // Re-run the effect if the language changes

// // // // // //   // Handle language selection change
// // // // // //   const handleLanguageChange = (event) => {
// // // // // //     setLanguage(event.target.value);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="webcam-container">
// // // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // // //       <div className="controls">
// // // // // //         <label htmlFor="language-selector">Select Language:</label>
// // // // // //         <select id="language-selector" value={language} onChange={handleLanguageChange} className="language-selector">
// // // // // //           <option value="en">English</option>
// // // // // //           <option value="hi">Hindi</option>
// // // // // //           {/* Add more languages as needed */}
// // // // // //         </select>
// // // // // //         {prediction && <h3>Prediction: {prediction}</h3>}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default WebCamCapture;
// // // // // import React, { useRef, useEffect, useState } from 'react';
// // // // // import axios from '../../axios';
// // // // // import './WebCamCapture.css';

// // // // // const WebCamCapture = () => {
// // // // //   const videoRef = useRef(null);
// // // // //   const [prediction, setPrediction] = useState(null);
// // // // //   const [language, setLanguage] = useState('en'); // Default language

// // // // //   // Capture image from the video feed
// // // // //   const captureImage = () => {
// // // // //     if (videoRef.current) {
// // // // //       const canvas = document.createElement('canvas');
// // // // //       const context = canvas.getContext('2d');
// // // // //       canvas.width = videoRef.current.videoWidth;
// // // // //       canvas.height = videoRef.current.videoHeight;
// // // // //       context.drawImage(videoRef.current, 0, 0);

// // // // //       return new Promise((resolve) => {
// // // // //         canvas.toBlob((blob) => {
// // // // //           resolve(blob);
// // // // //         }, 'image/jpeg');
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   // Set up the webcam and process each frame
// // // // //   useEffect(() => {
// // // // //     const setupWebcam = async () => {
// // // // //       try {
// // // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // // //         videoRef.current.srcObject = stream;
// // // // //         videoRef.current.play();
// // // // //       } catch (error) {
// // // // //         console.error('Error accessing webcam:', error);
// // // // //       }
// // // // //     };

// // // // //     setupWebcam();

// // // // //     const processFrame = async () => {
// // // // //       const imageBlob = await captureImage();
// // // // //       if (imageBlob) {
// // // // //         const formData = new FormData();
// // // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // // //         try {
// // // // //           // Send the image and selected language to the backend
// // // // //           const response = await axios.post('/predict', formData, {
// // // // //             headers: {
// // // // //               'Content-Type': 'multipart/form-data',
// // // // //             },
// // // // //             params: { lang: language } // Pass the selected language
// // // // //           });

// // // // //           // Update state with the prediction from the backend
// // // // //           const predictedText = response.data.prediction;
// // // // //           setPrediction(predictedText);

// // // // //         } catch (error) {
// // // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // // //         }
// // // // //       }
// // // // //       requestAnimationFrame(processFrame); // Schedule next frame
// // // // //     };

// // // // //     processFrame(); // Start processing frames

// // // // //     return () => {
// // // // //       if (videoRef.current) {
// // // // //         const stream = videoRef.current.srcObject;
// // // // //         if (stream) {
// // // // //           stream.getTracks().forEach(track => track.stop());
// // // // //         }
// // // // //       }
// // // // //     };
// // // // //   }, [language]); // Re-run the effect if the language changes

// // // // //   // Handle language selection change
// // // // //   const handleLanguageChange = (event) => {
// // // // //     setLanguage(event.target.value);
// // // // //   };

// // // // //   return (
// // // // //     <div className="webcam-container">
// // // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // // //       <div className="controls">
// // // // //         <label htmlFor="language-selector">Select Language:</label>
// // // // //         <select
// // // // //           id="language-selector"
// // // // //           value={language}
// // // // //           onChange={handleLanguageChange}
// // // // //           className="language-selector"
// // // // //         >
// // // // //           <option value="en">English</option>
// // // // //           <option value="hi">Hindi (हिंदी)</option>
// // // // //           <option value="ta">Tamil (தமிழ்)</option>
// // // // //           <option value="te">Telugu (తెలుగు)</option>
// // // // //           <option value="bn">Bengali (বাংলা)</option>
// // // // //           <option value="mr">Marathi (मराठी)</option>
// // // // //           <option value="gu">Gujarati (ગુજરાતી)</option>
// // // // //           <option value="kn">Kannada (ಕನ್ನಡ)</option>
// // // // //           <option value="ml">Malayalam (മലയാളം)</option>
// // // // //           <option value="pa">Punjabi (ਪੰਜਾਬੀ)</option>
// // // // //           {/* Add more languages as needed */}
// // // // //         </select>
// // // // //         {prediction && <h3>Prediction: {prediction}</h3>}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default WebCamCapture;
// // // // import React, { useRef, useEffect, useState } from 'react';
// // // // import axios from '../../axios'; // Ensure axios instance is correctly set up
// // // // import './WebCamCapture.css';

// // // // const WebCamCapture = () => {
// // // //   const videoRef = useRef(null);
// // // //   const [prediction, setPrediction] = useState(null);
// // // //   const [language, setLanguage] = useState('en'); // Default language

// // // //   // Capture image from the video feed
// // // //   const captureImage = () => {
// // // //     if (videoRef.current) {
// // // //       const canvas = document.createElement('canvas');
// // // //       const context = canvas.getContext('2d');
// // // //       canvas.width = videoRef.current.videoWidth;
// // // //       canvas.height = videoRef.current.videoHeight;
// // // //       context.drawImage(videoRef.current, 0, 0);

// // // //       return new Promise((resolve) => {
// // // //         canvas.toBlob((blob) => {
// // // //           resolve(blob);
// // // //         }, 'image/jpeg');
// // // //       });
// // // //     }
// // // //   };

// // // //   // Set up the webcam and process each frame
// // // //   useEffect(() => {
// // // //     const setupWebcam = async () => {
// // // //       try {
// // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // //         videoRef.current.srcObject = stream;
// // // //         videoRef.current.play();
// // // //       } catch (error) {
// // // //         console.error('Error accessing webcam:', error);
// // // //       }
// // // //     };

// // // //     setupWebcam();

// // // //     const processFrame = async () => {
// // // //       const imageBlob = await captureImage();
// // // //       if (imageBlob) {
// // // //         const formData = new FormData();
// // // //         formData.append('image', imageBlob, 'capture.jpg');

// // // //         try {
// // // //           // Send the image and selected language to the backend
// // // //           const response = await axios.post('/predict', formData, {
// // // //             headers: {
// // // //               'Content-Type': 'multipart/form-data',
// // // //             },
// // // //             params: { lang: language } // Pass the selected language
// // // //           });

// // // //           // Update state with the prediction from the backend
// // // //           const predictedText = response.data.prediction;
// // // //           setPrediction(predictedText);

// // // //         } catch (error) {
// // // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // // //         }
// // // //       }
// // // //       requestAnimationFrame(processFrame); // Schedule next frame
// // // //     };

// // // //     processFrame(); // Start processing frames

// // // //     return () => {
// // // //       if (videoRef.current) {
// // // //         const stream = videoRef.current.srcObject;
// // // //         if (stream) {
// // // //           stream.getTracks().forEach(track => track.stop());
// // // //         }
// // // //       }
// // // //     };
// // // //   }, [language]); // Re-run the effect if the language changes

// // // //   // Handle language selection change
// // // //   const handleLanguageChange = (event) => {
// // // //     setLanguage(event.target.value);
// // // //   };

// // // //   return (
// // // //     <div className="webcam-container">
// // // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // // //       <div className="controls">
// // // //         <label htmlFor="language-selector">Select Language:</label>
// // // //         <select
// // // //           id="language-selector"
// // // //           value={language}
// // // //           onChange={handleLanguageChange}
// // // //           className="language-selector"
// // // //         >
// // // //           <option value="en">English</option>
// // // //           <option value="hi">Hindi (हिंदी)</option>
// // // //           <option value="ta">Tamil (தமிழ்)</option>
// // // //           <option value="te">Telugu (తెలుగు)</option>
// // // //           <option value="bn">Bengali (বাংলা)</option>
// // // //           <option value="mr">Marathi (मराठी)</option>
// // // //           <option value="gu">Gujarati (ગુજરાતી)</option>
// // // //           <option value="kn">Kannada (ಕನ್ನಡ)</option>
// // // //           <option value="ml">Malayalam (മലയാളം)</option>
// // // //           <option value="pa">Punjabi (ਪੰਜਾਬੀ)</option>
// // // //           {/* Add more languages as needed */}
// // // //         </select>
// // // //         {prediction && <h3>Prediction: {prediction}</h3>}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default WebCamCapture;
// // // import React, { useRef, useEffect, useState } from 'react';
// // // import axios from '../../axios'; // Ensure axios instance is correctly set up
// // // import './WebCamCapture.css';

// // // const WebCamCapture = () => {
// // //   const videoRef = useRef(null);
// // //   const [prediction, setPrediction] = useState(null);
// // //   const [language, setLanguage] = useState('en'); // Default language

// // //   // Capture image from the video feed
// // //   const captureImage = () => {
// // //     if (videoRef.current) {
// // //       const canvas = document.createElement('canvas');
// // //       const context = canvas.getContext('2d');
// // //       canvas.width = videoRef.current.videoWidth;
// // //       canvas.height = videoRef.current.videoHeight;
// // //       context.drawImage(videoRef.current, 0, 0);

// // //       return new Promise((resolve) => {
// // //         canvas.toBlob((blob) => {
// // //           resolve(blob);
// // //         }, 'image/jpeg');
// // //       });
// // //     }
// // //   };

// // //   // Set up the webcam and process each frame
// // //   useEffect(() => {
// // //     const setupWebcam = async () => {
// // //       try {
// // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // //         videoRef.current.srcObject = stream;
// // //         videoRef.current.play();
// // //       } catch (error) {
// // //         console.error('Error accessing webcam:', error);
// // //       }
// // //     };

// // //     setupWebcam();

// // //     const processFrame = async () => {
// // //       const imageBlob = await captureImage();
// // //       if (imageBlob) {
// // //         const formData = new FormData();
// // //         formData.append('image', imageBlob, 'capture.jpg');

// // //         try {
// // //           // Send the image and selected language to the backend
// // //           const response = await axios.post('/predict', formData, {
// // //             headers: {
// // //               'Content-Type': 'multipart/form-data',
// // //             },
// // //             params: { lang: language } // Pass the selected language
// // //           });

// // //           // Update state with the prediction from the backend
// // //           const predictedText = response.data.prediction;
// // //           setPrediction(predictedText);

// // //         } catch (error) {
// // //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// // //         }
// // //       }
// // //       requestAnimationFrame(processFrame); // Schedule next frame
// // //     };

// // //     processFrame(); // Start processing frames

// // //     return () => {
// // //       if (videoRef.current) {
// // //         const stream = videoRef.current.srcObject;
// // //         if (stream) {
// // //           stream.getTracks().forEach(track => track.stop());
// // //         }
// // //       }
// // //     };
// // //   }, [language]); // Re-run the effect if the language changes

// // //   // Handle language selection change
// // //   const handleLanguageChange = (event) => {
// // //     setLanguage(event.target.value);
// // //   };

// // //   return (
// // //     <div className="webcam-container">
// // //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// // //       <div className="controls">
// // //         <label htmlFor="language-selector">Select Language:</label>
// // //         <select
// // //           id="language-selector"
// // //           value={language}
// // //           onChange={handleLanguageChange}
// // //           className="language-selector"
// // //         >
// // //           <option value="en">English</option>
// // //           <option value="hi">Hindi (हिंदी)</option>
// // //           <option value="ta">Tamil (தமிழ்)</option>
// // //           <option value="te">Telugu (తెలుగు)</option>
// // //           <option value="bn">Bengali (বাংলা)</option>
// // //           <option value="mr">Marathi (मराठी)</option>
// // //           <option value="gu">Gujarati (ગુજરાતી)</option>
// // //           <option value="kn">Kannada (ಕನ್ನಡ)</option>
// // //           <option value="ml">Malayalam (മലയാളം)</option>
// // //           <option value="pa">Punjabi (ਪੰਜਾਬੀ)</option>
// // //           {/* Add more languages as needed */}
// // //         </select>
// // //         {prediction && <h3>Prediction: {prediction}</h3>}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default WebCamCapture;
// // import React, { useRef, useEffect, useState } from 'react';
// // import axios from '../../axios'; // Ensure axios instance is correctly set up
// // import './WebCamCapture.css';

// // const WebCamCapture = () => {
// //   const videoRef = useRef(null);
// //   const [prediction, setPrediction] = useState(null);
// //   const [language, setLanguage] = useState('en'); // Default language
// //   const [showSidebar, setShowSidebar] = useState(true); // State to toggle sidebar

// //   // Capture image from the video feed
// //   const captureImage = () => {
// //     if (videoRef.current) {
// //       const canvas = document.createElement('canvas');
// //       const context = canvas.getContext('2d');
// //       canvas.width = videoRef.current.videoWidth;
// //       canvas.height = videoRef.current.videoHeight;
// //       context.drawImage(videoRef.current, 0, 0);

// //       return new Promise((resolve) => {
// //         canvas.toBlob((blob) => {
// //           resolve(blob);
// //         }, 'image/jpeg');
// //       });
// //     }
// //   };

// //   // Set up the webcam and process each frame
// //   useEffect(() => {
// //     const setupWebcam = async () => {
// //       try {
// //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// //         videoRef.current.srcObject = stream;
// //         videoRef.current.play();
// //         setShowSidebar(false); // Hide the sidebar once the video is set up
// //       } catch (error) {
// //         console.error('Error accessing webcam:', error);
// //       }
// //     };

// //     setupWebcam();

// //     const processFrame = async () => {
      
// //       const imageBlob = await captureImage();
// //       if (imageBlob) {
// //         const formData = new FormData();
// //         formData.append('image', imageBlob, 'capture.jpg');

// //         try {
// //           // Send the image and selected language to the backend
// //           const response = await axios.post('/predict', formData, {
// //             headers: {
// //               'Content-Type': 'multipart/form-data',
// //             },
// //             params: { lang: language } // Pass the selected language
// //           });

// //           // Update state with the prediction from the backend
// //           const predictedText = response.data.prediction;
// //           setPrediction(predictedText);

// //         } catch (error) {
// //           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
// //         }
// //       }
// //       requestAnimationFrame(processFrame); // Schedule next frame
// //     };

// //     processFrame(); // Start processing frames

// //     return () => {
// //       if (videoRef.current) {
// //         const stream = videoRef.current.srcObject;
// //         if (stream) {
// //           stream.getTracks().forEach(track => track.stop());
// //         }
// //       }
// //     };
// //   }, [language]); // Re-run the effect if the language changes

// //   // Handle language selection change
// //   const handleLanguageChange = (event) => {
// //     setLanguage(event.target.value);
// //   };

// //   return (
// //     <div className="webcam-container">
// //       <div className={`sidebar ${showSidebar ? 'show' : 'hide'}`}>
// //         <p style={{ padding: '20px', backgroundColor: 'gray', fontWeight: 'bold', borderRadius: '5px' }}>
// //           Online Video Calls Coming Soon
// //         </p>
// //       </div>
// //       <video ref={videoRef} width="640" height="480" autoPlay></video>
// //       <div className="controls">
// //         <label htmlFor="language-selector">Select Language:</label>
// //         <select
// //           id="language-selector"
// //           value={language}
// //           onChange={handleLanguageChange}
// //           className="language-selector"
// //         >
// //           <option value="en">English</option>
// //           <option value="hi">Hindi (हिंदी)</option>
// //           <option value="ta">Tamil (தமிழ்)</option>
// //           <option value="te">Telugu (తెలుగు)</option>
// //           <option value="bn">Bengali (বাংলা)</option>
// //           <option value="mr">Marathi (मराठी)</option>
// //           <option value="gu">Gujarati (ગુજરાતી)</option>
// //           <option value="kn">Kannada (ಕನ್ನಡ)</option>
// //           <option value="ml">Malayalam (മലയാളം)</option>
// //           <option value="pa">Punjabi (ਪੰਜਾਬੀ)</option>
// //           {/* Add more languages as needed */}
// //         </select>
// //         {prediction && <h3>Prediction: {prediction}</h3>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default WebCamCapture;
// import React, { useRef, useEffect, useState } from 'react';
// import axios from '../../axios'; // Ensure axios instance is correctly set up
// import './WebCamCapture.css';

// const WebCamCapture = () => {
//   const videoRef = useRef(null);
//   const [prediction, setPrediction] = useState(null);
//   const [language, setLanguage] = useState('en'); // Default language
//   const [showSidebar, setShowSidebar] = useState(true); // State to toggle sidebar

//   // Capture image from the video feed
//   const captureImage = () => {
//     if (videoRef.current) {
//       const canvas = document.createElement('canvas');
//       const context = canvas.getContext('2d');
//       canvas.width = videoRef.current.videoWidth;
//       canvas.height = videoRef.current.videoHeight;
//       context.drawImage(videoRef.current, 0, 0);

//       return new Promise((resolve) => {
//         canvas.toBlob((blob) => {
//           resolve(blob);
//         }, 'image/jpeg');
//       });
//     }
//   };

//   // Set up the webcam and process each frame
//   useEffect(() => {
//     const setupWebcam = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//         setShowSidebar(false); // Hide the sidebar once the video is set up
//       } catch (error) {
//         console.error('Error accessing webcam:', error);
//       }
//     };

//     setupWebcam();

//     const processFrame = async () => {
//       const imageBlob = await captureImage();
//       if (imageBlob) {
//         const formData = new FormData();
//         formData.append('image', imageBlob, 'capture.jpg');

//         try {
//           // Send the image and selected language to the backend
//           const response = await axios.post('/predict', formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//             params: { lang: language } // Pass the selected language
//           });

//           // Update state with the prediction from the backend
//           const predictedText = response.data.prediction;
//           setPrediction(predictedText);

//         } catch (error) {
//           console.error('Error sending image to backend:', error.response?.data?.error || error.message);
//         }
//       }
//       requestAnimationFrame(processFrame); // Schedule next frame
//     };

//     processFrame(); // Start processing frames

//     return () => {
//       if (videoRef.current) {
//         const stream = videoRef.current.srcObject;
//         if (stream) {
//           stream.getTracks().forEach(track => track.stop());
//         }
//       }
//     };
//   }, [language]); // Re-run the effect if the language changes

//   // Handle language selection change
//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value);
//   };

//   // Handle playing audio of the translated text
//   const handlePlayAudio = () => {
//     if (prediction) {
//       const utterance = new SpeechSynthesisUtterance(prediction);
//       utterance.lang = language; // Set the language for the speech
//       window.speechSynthesis.speak(utterance);
//     }
//   };

//   return (
//     <div className="webcam-container">
//       <div className={`sidebar ${showSidebar ? 'show' : 'hide'}`}>
//         <p style={{ padding: '20px', backgroundColor: 'gray', fontWeight: 'bold', borderRadius: '5px' }}>
//           Online Video Calls Coming Soon
//         </p>
//       </div>
//       <video ref={videoRef} width="640" height="480" autoPlay></video>
//       <div className="controls">
//         <label htmlFor="language-selector">Select Language:</label>
//         <select
//           id="language-selector"
//           value={language}
//           onChange={handleLanguageChange}
//           className="language-selector"
//         >
//           <option value="en">English</option>
//           <option value="hi">Hindi (हिंदी)</option>
//           <option value="ta">Tamil (தமிழ்)</option>
//           <option value="te">Telugu (తెలుగు)</option>
//           <option value="bn">Bengali (বাংলা)</option>
//           <option value="mr">Marathi (मराठी)</option>
//           <option value="gu">Gujarati (ગુજરાતી)</option>
//           <option value="kn">Kannada (ಕನ್ನಡ)</option>
//           <option value="ml">Malayalam (മലയാളം)</option>
//           <option value="pa">Punjabi (ਪੰਜਾਬੀ)</option>
//           {/* Add more languages as needed */}
//         </select>

//         {prediction && <h3>Prediction: {prediction}</h3>}

//         {/* Add a button to play the audio of the translated text */}
//         <button onClick={handlePlayAudio} className="play-audio-btn">
//           Play Audio
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WebCamCapture;
import React, { useRef, useEffect, useState } from 'react';
import axios from '../../axios'; // Ensure axios instance is correctly set up
import './WebCamCapture.css';

const WebCamCapture = () => {
  const videoRef = useRef(null);
  const [prediction, setPrediction] = useState(null);
  const [language, setLanguage] = useState('en'); // Default language
  const [showSidebar, setShowSidebar] = useState(true); // State to toggle sidebar

  // Capture image from the video feed
  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);

      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/jpeg');
      });
    }
  };

  // Set up the webcam and process each frame
  useEffect(() => {
    const setupWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setShowSidebar(false); // Hide the sidebar once the video is set up
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    setupWebcam();

    const processFrame = async () => {
      const imageBlob = await captureImage();
      if (imageBlob) {
        const formData = new FormData();
        formData.append('image', imageBlob, 'capture.jpg');

        try {
          // Send the image and selected language to the backend
          const response = await axios.post('/predict', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            params: { lang: language } // Pass the selected language
          });

          // Update state with the prediction from the backend
          const predictedText = response.data.prediction;
          setPrediction(predictedText);

        } catch (error) {
          console.error('Error sending image to backend:', error.response?.data?.error || error.message);
        }
      }
      requestAnimationFrame(processFrame); // Schedule next frame
    };

    processFrame(); // Start processing frames

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
      }
    };
  }, [language]); // Re-run the effect if the language changes

  // Handle language selection change
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Handle playing audio of the translated text using gTTS
  const handlePlayAudio = async () => {
    if (prediction) {
      try {
        const response = await axios.post('/tts', { text: prediction, lang: language }, { responseType: 'blob' });
        const audioUrl = URL.createObjectURL(response.data);
        const audio = new Audio(audioUrl);
        audio.play();
      } catch (error) {
        console.error('Error generating audio:', error.response?.data?.error || error.message);
      }
    }
  };

  return (
    <div className="webcam-container">
      <div className={`sidebar ${showSidebar ? 'show' : 'hide'}`}>
        <p style={{ padding: '20px', backgroundColor: 'gray', fontWeight: 'bold', borderRadius: '5px' }}>
          Online Video Calls Coming Soon
        </p>
      </div>
      <video ref={videoRef} width="640" height="480" autoPlay></video>
      <div className="controls">
        <label htmlFor="language-selector">Select Language:</label>
        <select
          id="language-selector"
          value={language}
          onChange={handleLanguageChange}
          className="language-selector"
        >
          <option value="en">English</option>
          <option value="hi">Hindi (हिंदी)</option>
          <option value="ta">Tamil (தமிழ்)</option>
          <option value="te">Telugu (తెలుగు)</option>
          <option value="bn">Bengali (বাংলা)</option>
          <option value="mr">Marathi (मराठी)</option>
          <option value="gu">Gujarati (ગુજરાતી)</option>
          <option value="kn">Kannada (ಕನ್ನಡ)</option>
          <option value="ml">Malayalam (മലയാളം)</option>
          <option value="pa">Punjabi (ਪੰਜਾਬੀ)</option>
          {/* Add more languages as needed */}
        </select>

        {prediction && <h3>Prediction: {prediction}</h3>}

        {/* Add a button to play the audio of the translated text */}
        <button onClick={handlePlayAudio} className="play-audio-btn">
          Play Audio
        </button>
      </div>
    </div>
  );
};

export default WebCamCapture;
