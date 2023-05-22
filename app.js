const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const voteRoutes = require('./routes/vote');

const app = express();
const dataFile = path.join(__dirname, "file.json");
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// app.get('/vote', (req, res) => {
//     fs.readFile(dataFile, 'utf-8')
//         .then(data => {
//             console.log(data, 'hayhay');
//             console.log(typeof(data));
//             const parseData = JSON.parse(data);
//             console.log(parseData, 'hihi', typeof(parseData));
//             res.status(200).json({
//                 vote: parseData
//             })
//         })
//         .catch(err => console.log(err));

// });

app.use('/user', voteRoutes);


app.listen(8080, ()=>console.log('server is running!'));