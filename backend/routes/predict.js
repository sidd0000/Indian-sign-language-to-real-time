// import express from 'express';
// import axios from 'axios';
// import FormData from 'form-data';

// const router = express.Router();

// router.post('/', async (req, res) => {
//     try {
//         // Log received files for debugging
//         console.log('Received files:', req.files);

//         // Check if the image file is provided
//         if (!req.files || !req.files.image) {
//             return res.status(400).json({ error: 'Image file not provided' });
//         }

//         const { image } = req.files;

//         // Create a FormData object to send the image to Flask
//         const formData = new FormData();
//         formData.append('image', image.data, {
//             filename: image.name,
//             contentType: image.mimetype,
//         });

//         // Send the image to the Flask API
//         const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
//             headers: {
//                 ...formData.getHeaders(),
//                 'Accept': 'application/json',
//             },
//         });

//         // Send the prediction result back to the client
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error during prediction:', error.message);
//         res.status(500).json({ error: 'Prediction failed' });
//     }
// });

// export default router;
import express from 'express';
import axios from 'axios';
import FormData from 'form-data';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Check if the image file is provided
        if (!req.files || !req.files.image) {
            return res.status(400).json({ error: 'Image file not provided' });
        }

        const { image } = req.files;

        // Create a FormData object to send the image to Flask
        const formData = new FormData();
        formData.append('image', image.data, {
            filename: image.name,
            contentType: image.mimetype,
        });

        // Get the language from the query parameters
        const language = req.query.lang || 'en';

        // Send the image and language to the Flask API
        const response = await axios.post(`http://127.0.0.1:5000/predict?lang=${language}`, formData, {
            headers: {
                ...formData.getHeaders(),
                'Accept': 'application/json',
            },
        });

        // Send the prediction result back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error during prediction:', error.message);
        res.status(500).json({ error: 'Prediction failed' });
    }
});

export default router;
