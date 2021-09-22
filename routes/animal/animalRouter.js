var express = require('express');
const animalController = require('./controller/animalController');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

        animalController.getAllAnimal( {}, function (err, foundAnimal) {
            if (err) {
                res
                .status(500)
                .json({
                        message: "Something went wrong!", error: err.message });
                    } else {
                        res.json({ message: "success", foundAnimal });
                    }
        });
});

router.post("/create-animal", function( req, res) {
    animalController.createAnimal(req.body, function
        (err, savedAnimal) {
            if (err) {
                res
                    .status(500)
                    .json({ message: "Something went wrong!",
                error: err.message });
            } else {
                res.json({ message: "success", savedAnimal });
            }
        });
});

router.delete('/delete-animal-by-id/:id', function (req, res) {
    animalController.deleteAnimal(req.params.id, function (err, deletedAnimal) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                });
        } else {
            res.json({ message: "success", deletedAnimal });
        }
    });
});

router.put('/update-animal-by-id/:id', function (req, res) {
    animalController.updateAnimalById(req.params.id, req.body, function (err, updatedAnimal) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                });
        } else {
            res.json({ message: "success", updatedAnimal });
        }
    });
});

module.exports = router;
