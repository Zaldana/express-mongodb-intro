const Recipe = require("../model/Recipe");

module.exports = {

    getAllRecipes: (body, callback) => {

        Recipe.find(body, function (err, foundRecipe) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, foundRecipe);
            }
        });
    },

    createRecipe: (body, callback) => {

        const createdRecipe = new Recipe({
            recipe: body.recipe,
            recipePrice: body.recipePrice
        });

        createdRecipe.save(function
            (err, savedRecipe) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, savedRecipe);
            }
        });
    },

    deleteRecipe: (id, callback) => {
        Recipe.findByIdAndDelete(id, function (err, deletedRecipe) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, deletedRecipe);
            }
        });
    },

    updateRecipeById: (id, body, callback) => {
        Recipe.findByIdAndUpdate(id, body, { new: true }, function (err, updatedRecipe) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, updatedRecipe);
            }
        });
    },
};