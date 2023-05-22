const fs = require('fs').promises;
const path = require('path');

const dataFile = path.join(__dirname, '..', "file.json");

exports.getPercentage = async (req, res, next) => {

    try{
        let data = JSON.parse(await fs.readFile(dataFile, "utf-8"));

        const totalValue = Object.values(data).reduce((total, n) => {
            return total += n;
        });

        data = Object.entries(data).map(([label, values]) => {
            return {
                label,
                percentage: ((100 * values) / totalValue || 0).toFixed(0)
            }
        });
        res.status(200).json(data);

    }catch(error){
        console.log(error);
    }
    
}

// exports.getVoteData = async (req, res, next) => {
//     try{
//         const data = await fs.readFile(dataFile, "utf-8");
//         let parseData = JSON.parse(data);
//         console.log(parseData);
//         const totalValue = Object.values(parseData).reduce((total, n) => total += n , 0);
//         const test = Object.entries(parseData);
//         console.log(test);
//         parseData = Object.entries(parseData).map(([label, values]) => {
//             console.log(label, values);
//             return {
//                 label,
//                 percentage: ((100 * values) / totalValue || 0 ).toFixed(0)
//             }
//         });
//         res.status(200).json(parseData);
//     }catch(error){
//         console.log(error);
//     }
// }

// exports.votePost = async (req, res, next) => {
//     let data = JSON.parse(await fs.readFile(dataFile, "utf-8"));
    
//     const js = req.body.vote;
//     console.log(js,data[js]);

//     data[js]++;
//     console.log(data[js]);
    
//     await fs.writeFile(dataFile, JSON.stringify(data));

//     res.status(200).json({
//         message: 'voting complete!'
//     });

// }

exports.votePost = async (req, res, next) => {
    try{
        const data = JSON.parse(await fs.readFile(dataFile, "utf-8"));

    data[req.body.add]++;
    console.log(req.body.add, data[req.body.add]);

    await fs.writeFile(dataFile, JSON.stringify(data));

    console.log('hi');

    res.status(200).json({
        data
    });
    }catch(error){
        console.log(error);
    }
}

// exports.votePost = (req, res, next) => {
//     const data = req.body;
//     console.log(data);
//     res.status(200).json({
//         data: data.add
//     });
// }

