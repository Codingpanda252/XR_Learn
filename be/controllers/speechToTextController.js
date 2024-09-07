const axios = require('axios');
const FormData = require('form-data');
const { Readable } = require('stream');

const bufferToStream = (buffer) => {
    return Readable.from(buffer);
};

// Helper function to convert audio to text (use your transcription service here)
const convertAudioToText = async (audioBuffer) => {
    // This function should use a transcription service to convert audioBuffer to text
    // Replace with your transcription logic
    return 'Transcribed text here'; // Example placeholder text
};

const speechToText = async (req, res) => {
    const audioFile = req.file;

    if (!audioFile) {
        return res.status(400).json({ message: 'Audio file is required.' });
    }

    try {
        // Convert audio to text using a transcription service
        const transcribedText = await convertAudioToText(audioFile.buffer);

        // Now use the new API to process the transcribed text
        const options = {
            method: 'POST',
            url: 'https://open-ai21.p.rapidapi.com/conversationpalm2',
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY, // Replace with your RapidAPI key
                'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            data: {
                messages: [
                    {
                        role: 'user',
                        content: transcribedText,
                    },
                ],
            },
        };

        const response = await axios.request(options);
        const result = response.data;

        console.log('API Response:', result);
        res.json(result);
    } catch (error) {
        console.error('API Error Response:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
};

module.exports = {
    speechToText
};
