const plantData = require('../data/plantData.js');
var plantID = 11;

module.exports = {
    read: (request, response) => {
        response.status(200).send(plantData);
    },
    create: (request, response) => {
        plantData.push({
            id: plantID,
            name: request.body.name,
            catagory: request.body.catagory,
            firstPlanting: request.body.firstPlanting,
            howOften: request.body.howOften,
            daysToMaturity: request.body.daysToMaturity,
            stopPlanting: request.body.stopPlanting,
            notes: request.body.notes
        });
        plantID++;
        response.status(200).send(plantData);
    }
}