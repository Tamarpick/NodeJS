const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// פענוח גוף הבקשה מסוג JSON
app.use(express.json());

// הגדרת נקודת קצה לGET בנתיב "/movies"
app.get('/movies', (req, res) => {
    // קריאה והחזרת המערך מקובץ JSON
    fs.readFile('movies.json', (err, data) => {
        if (err) {
            res.status(500).send('error reading file');
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});

// הגדרת נקודת קצה לPOST בנתיב "/movie"
app.post('/movie', (req, res) => {
    // הדפסת האובייקט שהתקבל ללא שמירה
    console.log(req.body);
    res.status(201).send('new movie received and printedס');
});

// הפעלת השרת
app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
