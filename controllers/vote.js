const fs = require('fs').promises;
const path = require('path');

const dataFile = path.join(__dirname, '..', "file.json");

exports.getVoteData = (req, res, next) => {
    
    fs.readFile(dataFile, "utf-8")
        .then(data => {
            console.log(data, typeof(data));
            return JSON.parse(data);
        })
        .then(parseData => {
            console.log(parseData, typeof(parseData));
            res.status(200).json({
                vote: parseData
            })
        })
        .catch(err => {
            console.log(err);
        })
    
}


// fs.readFile(dataFile, "utf-8")
    //     .then(data => {
    //         const parseData = JSON.parse(data);
    //         console.log(parseData);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })