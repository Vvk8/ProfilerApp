const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Create data in JSON file
app.post('/api/data', (req, res) => {
    const data = req.body;

    fs.readFile('data.json', (err, jsonData) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).json({ error: 'Failed to read data file' });
        }

        const existingData = JSON.parse(jsonData);
        const newData = [...existingData, data];

        fs.writeFile('data.json', JSON.stringify(newData), (err) => {
            if (err) {
                console.error('Error writing to JSON file:', err);
                return res.status(500).json({ error: 'Failed to write data file' });
            }

            res.status(200).json({ success: true });
        });
    });
});

// Delete data from JSON file
app.delete('/api/data/:index', (req, res) => {
    const { index } = req.params;

    fs.readFile('data.json', (err, jsonData) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).json({ error: 'Failed to read data file' });
        }

        const existingData = JSON.parse(jsonData);
        if (index < 0 || index >= existingData.length) {
            return res.status(400).json({ error: 'Invalid index' });
        }

        existingData.splice(index, 1);

        fs.writeFile('data.json', JSON.stringify(existingData), (err) => {
            if (err) {
                console.error('Error writing to JSON file:', err);
                return res.status(500).json({ error: 'Failed to write data file' });
            }

            res.status(200).json({ success: true });
        });
    });
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
