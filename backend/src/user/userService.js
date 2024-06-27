const userModel = require('./userModel');

module.exports.getDataFromDBService = (userDetails) => {
    return userModel.find({}).exec(); // Utilisation de exec() pour retourner une promesse
}

module.exports.updateUserDBService = (id, userDetails) => {
    return userModel.findByIdAndUpdate(id, userDetails).exec(); // Utilisation de exec() pour retourner une promesse
}

module.exports.createUserDBService = (userDetails) => {
    const userModelData = new userModel({
        name: userDetails.name,
        address: userDetails.address,
        phone: userDetails.phone
    });

    return userModelData.save(); // save() retourne déjà une promesse
}

module.exports.removeUserDBService = (id) => {
    return userModel.findByIdAndDelete(id).exec(); // Utilisation de exec() pour retourner une promesse
}
